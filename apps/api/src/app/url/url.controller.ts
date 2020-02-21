import { Controller, Body, Post, Get, Param, Res } from '@nestjs/common';
import { CreateShortUrlRequestDto } from './url.dto';
import { UrlService } from './url.service';
import * as atob from 'atob';

@Controller()
export class UrlController {

  constructor(private readonly urlService: UrlService) {

  }

  @Post('/shorten')
  save(@Body() createShortUrlDto: CreateShortUrlRequestDto) {
    return this.urlService.shortUrl(createShortUrlDto);
  }

  @Get('/:hash')
  async getShortUrl(@Param('hash') hash: string, @Res() res) {
    try {
      const id = atob(hash);
      const data = await this.urlService.getShortUrl(id);
      if(data) {
          return res.redirect(data.url);
      }
      return res.redirect('/');
    } catch (error) {
      return res.redirect('/');
    }
  }
}
