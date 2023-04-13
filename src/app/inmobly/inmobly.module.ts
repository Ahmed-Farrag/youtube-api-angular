import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatistecComponent } from './components/statistec/statistec.component';
import { FavScreenComponent } from './components/fav-screen/fav-screen.component';
import { OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OfflineComponent } from './components/offline/offline.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    StatistecComponent,
    FavScreenComponent,
    OfflineComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    OrderModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule

  ],
})
export class InmoblyModule { }
