import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InmoblyModule } from './inmobly/inmobly.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment.development';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InmoblyModule,

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.Production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
