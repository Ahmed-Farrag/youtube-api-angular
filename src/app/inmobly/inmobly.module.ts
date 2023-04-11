import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { StatistecComponent } from './components/statistec/statistec.component';
import { FavScreenComponent } from './components/fav-screen/fav-screen.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    StatistecComponent,
    FavScreenComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    NgxPaginationModule,
    NgxStarRatingModule,
    OrderModule

  ],
})
export class InmoblyModule { }
