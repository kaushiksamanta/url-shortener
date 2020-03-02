import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'url-shortener-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  originalUrl: string;
  shortUrl: string = null;

  constructor(private appService: AppService) {

  }

  onSubmit() {
    this.appService.shortenUrl(this.originalUrl).subscribe((data: any) => {
      this.shortUrl = data.shortenUrl;
    });
  }
}
