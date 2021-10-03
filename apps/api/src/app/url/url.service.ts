import { Injectable } from '@nestjs/common';
import { CreateShortUrlRequestDto, ShortUrlResponseDto } from './url.dto';
import { Repository } from 'typeorm';
import { Url, Counter } from '../../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { RedisService } from 'nestjs-redis';
import * as btoa from 'btoa';
import * as IORedis from 'ioredis';

@Injectable()
export class UrlService {
  redisClient: IORedis.Redis;

  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,
    @InjectRepository(Counter)
    private readonly counterRepository: Repository<Counter>,
    private readonly redisService: RedisService,
  ) {
    this.redisClient = this.redisService.getClient();
  }

  async shortUrl(data: CreateShortUrlRequestDto): Promise<ShortUrlResponseDto> {
    const found = await this.urlRepository.findOne({ where: { url: data.url } });
    if(found) {
      return new ShortUrlResponseDto({
        url: data.url,
        shortenUrl: btoa(found.id.toString()),
        createdAt: found.createdAt.toString(),
      });
    }
    const counterData = await this.counterRepository.findOne({
      id: 1,
    });
    const newCount = counterData.count + 1;
    await this.counterRepository.update(1, { count: newCount });
    await this.urlRepository.insert({
      id: newCount,
      url: data.url
    });
    const newResult = await this.urlRepository.findOne({ id: newCount });
    await this.redisClient.zadd('shortUrlsSet', 0, newResult.url);
    return new ShortUrlResponseDto({
      url: newResult.url,
      shortenUrl: btoa(newResult.id.toString()),
      createdAt: newResult.createdAt.toString(),
    });
  }

  async getShortUrl(id: string): Promise<Url> {
    const urlData = await this.urlRepository.findOne({ where: { id: id } });
    await this.redisClient.zincrby('shortUrlsSet', 1, urlData.url);
    return urlData;
  }

  async getTopTenFrequentUrls() {
    const urls = await this.redisClient.zrevrange('shortUrlsSet', 0 , 9);
    const promises = [];
    urls.forEach((url) => {
      promises.push(new Promise(async (resolve) => {
        resolve({
          url,
          hits: await this.redisClient.zscore('shortUrlsSet', url)
        })
      }));
    })
    return Promise.all(promises);
  }
}
