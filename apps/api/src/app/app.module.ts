import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../../db-config';
import { UrlModule } from './url/url.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UrlModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
