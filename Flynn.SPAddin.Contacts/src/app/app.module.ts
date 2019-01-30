import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, Location } from '@angular/common';


import { ContactDetailsComponent, MatchesRegionPipe } from './contact-details/contact-details.component'
;

@NgModule({
  declarations: [
    AppComponent
      ,
      MatchesRegionPipe,  
        ContactDetailsComponent,
       ],
  imports: [
      BrowserModule,
      HttpModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
      MatchesRegionPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
