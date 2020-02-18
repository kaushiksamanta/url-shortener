import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url, Counter } from '../../entities';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Url, Counter])
  ],
  controllers: [UrlController],
  providers: [UrlService]
})
export class UrlModule {}
