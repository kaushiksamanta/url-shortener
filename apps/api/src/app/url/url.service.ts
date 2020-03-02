import { Injectable } from '@nestjs/common';
import { CreateShortUrlRequestDto, ShortUrlResponseDto } from './url.dto';
import { Repository } from 'typeorm';
import { Url, Counter } from '../../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { environment } from '../../environments/environment';
import * as btoa from 'btoa';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,
    @InjectRepository(Counter)
    private readonly counterRepository: Repository<Counter>
  ) {

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
    return new ShortUrlResponseDto({
      url: newResult.url,
      shortenUrl: btoa(newResult.id.toString()),
      createdAt: newResult.createdAt.toString(),
    });
  }

  async getShortUrl(id: string): Promise<Url> {
    return await this.urlRepository.findOne({ where: { id: id } });
  }
}
