import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    NavbarComponent
  ],
  providers: [],
})
export class CoreModule {}
