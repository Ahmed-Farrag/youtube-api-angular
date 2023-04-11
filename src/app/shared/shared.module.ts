import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ImgnavComponent } from './components/imgnav/imgnav.component';




@NgModule({
  declarations: [TopBarComponent, SpinnerComponent, ImgnavComponent],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, FormsModule,
    RouterModule],
  exports: [TopBarComponent, SpinnerComponent, ImgnavComponent],
})
export class SharedModule { }
