import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  videos: any[] = [];
  data: any = {};
  // for pagination
  page: any = 1;
  total: any;
  // for toster
  loading: boolean = false
  // for sorting
  orderHeader: String = ''

  constructor(private apichannel: VideosService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  // get videos and pass channel id
  getVideos(): void {
    this.loading = true
    this.apichannel.getAllVideos('UCAuUUnT6oDeKwE6v1NGQxug')

    // reader
    this.apichannel.reader$.subscribe((data) => {
      this.videos = data.items;
      this.loading = false
    });
  }

  // pagination method
  changePage(event: any) {
    this.page = event;
  }

  // sort function btn
  sortBtn(headerTitle: string) {
    this.orderHeader = headerTitle
  }


}
