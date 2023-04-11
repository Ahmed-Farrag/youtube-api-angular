import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';
import { InmoblyModule } from './inmobly/inmobly.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from 'src/environments/environment.production';







@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InmoblyModule,
    // NgxPaginationModule,
    // ReactiveFormsModule, FormsModule,
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.Production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
