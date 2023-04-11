import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TopBarComponent],
  imports: [BrowserModule, CommonModule, ReactiveFormsModule, FormsModule,
    RouterModule],
  exports: [TopBarComponent],
})
export class SharedModule {}
