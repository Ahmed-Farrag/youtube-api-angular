import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute } from '@angular/router';

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
  item: any;
  constructor(
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private apichannel: VideosService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getVideo();
  }
  getVideo() {
    this.apichannel.getVideoById(this.id).subscribe((res) => {
      this.data = res;
    });
  }

  add() {
    if ('fav' in localStorage) {
      this.favItem = JSON.parse(localStorage.getItem('fav')!);
      this.favItem.push(this.data);
      localStorage.setItem('fav', JSON.stringify(this.favItem));
      // console.log(this.data);
    } else {
      this.favItem.push(this.data);
      localStorage.setItem('fav', JSON.stringify(this.favItem));
    }
  }

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
