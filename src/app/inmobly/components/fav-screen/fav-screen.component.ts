import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-screen',
  templateUrl: './fav-screen.component.html',
  styleUrls: ['./fav-screen.component.scss']
})
export class FavScreenComponent implements OnInit {
  favItem:any[]= []
  item: any
  ngOnInit(): void {
    this.addFav()
  }
  
  addFav() {
    if ('fav' in localStorage) {
      this.favItem = JSON.parse(localStorage.getItem('fav')!);

        console.log(this.favItem);
    } 
  
  }



  
}
