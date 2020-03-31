import { Test } from '@nestjs/testing';
import { UrlService } from './url.service';
import { Repository } from 'typeorm';
import { Url, Counter } from '../../entities';
import { getRepositoryToken } from '@nestjs/typeorm';

// @ts-ignore
export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
}));

describe('AppService', () => {
  let service: UrlService;
  let urlRepositoryMock: MockType<Repository<Url>>;
  let counterRepositoryMock: MockType<Repository<Counter>>;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [
        UrlService,
        {
          provide: getRepositoryToken(Url),
          useFactory: repositoryMockFactory
        },
        {
          provide: getRepositoryToken(Counter),
          useFactory: repositoryMockFactory
        }
      ],
    }).compile();

    service = app.get<UrlService>(UrlService);
    urlRepositoryMock = app.get(getRepositoryToken(Url));
    counterRepositoryMock = app.get(getRepositoryToken(Counter));
  });

  describe('getData', () => {
    it('should return shortUrl', async () => {
      expect.assertions(1);
      const date = new Date();
      jest.spyOn(service, 'getShortUrl').mockImplementation(() => Promise.resolve({
        url: 'https://jestjs.io/docs/en/tutorial-async',
        id: 1001,
        updatedAt: date,
        createdAt: date
      }));
      const data = await service.getShortUrl('1001');
      expect(data).toEqual({
        url: 'https://jestjs.io/docs/en/tutorial-async',
        id: 1001,
        updatedAt: date,
        createdAt: date
      });
    });
  });

});
