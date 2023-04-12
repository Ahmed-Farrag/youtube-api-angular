import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: any;
  data: any = {};
  star: any = {};

  favItem: any[] = [];
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue!: number;
  favStar: any[] = [];

  items: any;

  loading: boolean = false
  clicked = false;
  // isUserLogged: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private apichannel: VideosService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getVideo();

  }
  getVideo() {
    this.loading = true

    this.apichannel.getVideoById(this.id).subscribe((res) => {
      this.data = res;
      this.loading = false
    }, error => {
      this.loading = false
      alert(error)
    }
    );
  }

  add() {
    if ('fav' in localStorage) {
      this.favItem = JSON.parse(localStorage.getItem('fav')!);
      let exist = this.favItem.find(items => items.etag == this.data.etag);
      if (exist) {
        this.toastr.error('video is already in ur list');
        this.router.navigate(['home'])
      } else {
        this.favItem.push(this.data);
        localStorage.setItem('fav', JSON.stringify(this.favItem));
        // console.log(this.data);
        this.toastr.success('Added to Favorite List');
      }
    } else {
      this.favItem.push(this.data);
      localStorage.setItem('fav', JSON.stringify(this.favItem));
    }
  }
  // star rating btn to handle count and handle it in localstoge
  countStar(star: number) {
    this.selectedValue = star;
    console.log(star);
    if ('star' in localStorage) {
      this.favStar = JSON.parse(localStorage.getItem('star')!);

      let exist = this.favItem.find(items => items.index == this.selectedValue);
      if (exist) {
        this.toastr.error('star is already in ur list');
        this.router.navigate(['home'])
      } else {
        this.favStar.push(this.selectedValue);
        localStorage.setItem('star', JSON.stringify(this.favStar));
        this.toastr.success('Added star');
      }

      // this.favStar.push(this.selectedValue);
      // localStorage.setItem('star', JSON.stringify(this.favStar));
      // this.toastr.success('Added star');
    } else {
      this.favStar.push(this.selectedValue);
      localStorage.setItem('star', JSON.stringify(this.favStar));
    }

  }





}
