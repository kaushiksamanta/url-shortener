import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '../../db-config';
import { UrlModule } from './url/url.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UrlModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
