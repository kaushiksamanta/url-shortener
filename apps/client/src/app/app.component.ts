import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'url-shortener-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  originalUrl: string;
  shortUrl: string = null;
  topTenUrls = [];

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    this.getTopTenShortenUrls();
  }

  onSubmit() {
    this.appService.shortenUrl(this.originalUrl).subscribe((data: any) => {
      this.shortUrl = data.shortenUrl;
      this.getTopTenShortenUrls();
    });
  }

  getTopTenShortenUrls() {
    this.appService.getTopTenShortenUrls().subscribe((data: any) => {
      this.topTenUrls = data;
    });
  }

}
