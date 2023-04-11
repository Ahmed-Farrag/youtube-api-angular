import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute } from '@angular/router';
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
  starItem: any[] = [];
  items: any;

  loading: boolean = false
  // isUserLogged: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private apichannel: VideosService,
    private toastr: ToastrService
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

  // showSuccess() {

  // }

  // starFunc() {
  //   console.log('star heo');

  //   localStorage.setItem('star', JSON.stringify(this.starItem))
  //   if ('star' in localStorage) {
  //     this.starItem = JSON.parse(localStorage.getItem('star')!);
  //     this.starItem.push(this.data);
  //     localStorage.setItem('star', JSON.stringify(this.starItem));

  //     console.log(this.data);
  //   } else {
  //     this.starItem.push(this.data);
  //     localStorage.setItem('star', JSON.stringify(this.starItem));
  //   }
  // }
}
