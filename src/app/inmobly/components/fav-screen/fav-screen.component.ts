import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fav-screen',
  templateUrl: './fav-screen.component.html',
  styleUrls: ['./fav-screen.component.scss']
})
export class FavScreenComponent implements OnInit {
  favItem: any[] = []

  favStar: any[] = [];
  item: any

  loading: boolean = false
  index: any;

  constructor(private location: Location,
    private toastr: ToastrService,
    private router: Router) { }



  ngOnInit(): void {
    this.addFav()
    this.getStar()
  }

  addFav() {
    if ('fav' in localStorage) {
      this.favItem = JSON.parse(localStorage.getItem('fav')!);
    } else {
      this.loading = true
    }
  }

  getStar() {
    if ('star' in localStorage) {
      this.favStar = JSON.parse(localStorage.getItem('star')!);

    } else {
      console.log('not found');

    }
  }


  removeAll() {
    // this.loading = true
    let x = this.favItem = []
    if (x) {
      localStorage.setItem("fav", JSON.stringify(this.favItem))
      this.toastr.error('Didnt have Favorite Videos');
      this.router.navigate(['home'])
    }
    let z = this.favStar = []
    if (z) {
      localStorage.setItem("star", JSON.stringify(this.favStar))
      this.toastr.error('Didnt have Favorite Videos');

    }
  }

  goBack() {
    this.location.back()
  }

  remove(index: number) {

    this.favItem.splice(index, 1)
    this.favStar.splice(index, 1)
    localStorage.setItem("fav", JSON.stringify(this.favItem))
    localStorage.setItem("star", JSON.stringify(this.favStar))

  }

}
