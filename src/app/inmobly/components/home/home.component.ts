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
  page: any = 1;
  total: any;
  loading: boolean = false

  orderHeader: String = ''
  constructor(
    private apichannel: VideosService
  ) {
    this.apichannel.reader$.subscribe((data) => {
      this.videos = data.items;
      this.loading = false
    });
  }
  ngOnInit(): void {
    this.getVideos();


  }
  // get videos and pass channel id
  getVideos(): void {
    this.loading = true
    this.apichannel.test('UCAuUUnT6oDeKwE6v1NGQxug');
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
