import { Test } from '@nestjs/testing';

import { UrlService } from './url.service';

describe('AppService', () => {
  let service: UrlService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [UrlService]
    }).compile();

    service = app.get<UrlService>(UrlService);
  });

  // describe('getData', () => {
  //   it('should return "Welcome to api!"', () => {
  //     expect(service.getData()).toEqual({ message: 'Welcome to api!' });
  //   });
  // });
});
