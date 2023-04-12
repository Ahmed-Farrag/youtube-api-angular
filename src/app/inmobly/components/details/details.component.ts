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
  favItem: any[] = [];
  items: any;

  star: any = {};
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue!: number;
  favStar: any[] = [];

  loading: boolean = false
  clicked = false;

  constructor(
    private route: ActivatedRoute,
    private apichannel: VideosService,
    private toastr: ToastrService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.getVideo();
  }

  // method to get video and landle error 
  getVideo() {
    this.loading = true
    this.id = this.route.snapshot.paramMap.get('id');
    this.apichannel.getVideoById(this.id).subscribe((res) => {
      this.data = res;
      this.loading = false
    }, error => {
      this.toastr.error('Missing to load data', error);
    }
    );
  }

  // add to favorit method and handel errors
  // localstorge handling - navigate to anther route
  addToFavorite() {
    if ('fav' in localStorage) {
      this.favItem = JSON.parse(localStorage.getItem('fav')!);
      let exist = this.favItem.find(items => items.etag == this.data.etag);
      if (exist) {
        this.toastr.error('Video Already In You List');
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

  // star rating btn to handle count and put it in localstoge
  countStar(star: number) {
    this.selectedValue = star;
    console.log(star);
    if ('star' in localStorage) {
      this.favStar = JSON.parse(localStorage.getItem('star')!);

      this.favStar.push(this.selectedValue);
      localStorage.setItem('star', JSON.stringify(this.favStar));
      this.toastr.success('Added star');

    } else {
      this.favStar.push(this.selectedValue);
      localStorage.setItem('star', JSON.stringify(this.favStar));
    }

  }





}
