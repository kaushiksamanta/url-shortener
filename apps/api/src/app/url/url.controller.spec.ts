import { Test, TestingModule } from '@nestjs/testing';

import { UrlController } from './url.controller';
import { UrlService } from './url.service';

describe('UrlController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [UrlController],
      providers: [UrlService]
    }).compile();
  });

  describe('getData', () => {
    // it('should return "Welcome to api!"', () => {
    //   const appController = app.get<UrlController>(UrlController);
    //   expect(appController.getData()).toEqual({ message: 'Welcome to api!' });
    // });
  });
});
