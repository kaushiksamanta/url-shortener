import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../../db-config';
import { UrlModule } from './url/url.module';
import { RedisModule} from 'nestjs-redis';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    RedisModule.register({
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT),
    }),
    UrlModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
