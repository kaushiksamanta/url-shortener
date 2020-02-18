import { IsNotEmpty } from 'class-validator';

export class CreateShortUrlRequestDto {
  @IsNotEmpty()
  url: string;
}

export class ShortUrlResponseDto {
  shortenUrl: string;
  url: string;
  createdAt: string;

  constructor(init:Partial<ShortUrlResponseDto>) {
    Object.assign(this, init);
  }

}
