import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {
  }

  shortenUrl(url: string) {
    return this.http.post('/api/shorten', {
      url
    });
  }

  getTopTenShortenUrls() {
    return this.http.get('/api/topTenUrls');
  }
}
