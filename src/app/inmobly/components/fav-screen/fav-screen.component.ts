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
  // for videos
  favItem: any[] = []
  item: any
  // for rating
  favStar: any[] = [];
  index: any;

  constructor(private location: Location, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.addFavorite()
    this.getStar()
  }

  // show videos from localstorge
  addFavorite() {
    if ('fav' in localStorage) {
      this.favItem = JSON.parse(localStorage.getItem('fav')!);
    } else {
      this.toastr.error('have massing to show data');
    }
  }

  // show rating from localstorge
  getStar() {
    if ('star' in localStorage) {
      this.favStar = JSON.parse(localStorage.getItem('star')!);
    } else {
      this.toastr.error('Not Found In Storge');
    }
  }

  // remove All videos from favorite list
  // navigate to anther pass if method done
  // for ratings and videos
  removeAll() {
    let videolocal = this.favItem = []
    if (videolocal) {
      localStorage.setItem("fav", JSON.stringify(this.favItem))
      this.toastr.success('videos removed');
      this.router.navigate(['home'])
    }
    let starlocal = this.favStar = []
    if (starlocal) {
      localStorage.setItem("star", JSON.stringify(this.favStar))
    }
  }

  // method to remove one item from localstorge - for rating and video
  remove(index: number) {
    this.favItem.splice(index, 1)
    localStorage.setItem("fav", JSON.stringify(this.favItem))
    this.favStar.splice(index, 1)
    localStorage.setItem("star", JSON.stringify(this.favStar))
    this.toastr.success('Video Deleted');

  }

  // redirect location method
  goBack() {
    this.location.back()
  }
}
