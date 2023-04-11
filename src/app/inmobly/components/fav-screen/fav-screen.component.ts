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

  constructor(private location: Location,
    private toastr: ToastrService,
    private router: Router) { }
  favItem: any[] = []
  item: any

  loading: boolean = false
  index: any

  ngOnInit(): void {
    this.addFav()
  }

  addFav() {
    if ('fav' in localStorage) {
      this.favItem = JSON.parse(localStorage.getItem('fav')!);
    } else {
      this.loading = true
    }
  }


  remove() {
    this.favItem = []
    // this.favItem.splice(index, 1)
    localStorage.setItem("fav", JSON.stringify(this.favItem))
    this.toastr.error('Didnt have Favorite Videos');
    // this.loading = true
    this.router.navigate(['home'])
  }

  goBack() {
    this.location.back()
  }
  // goBackTo() {
  //   this.location.back()
  // }

}
