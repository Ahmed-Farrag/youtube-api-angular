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
    // setTimeout(()=>{this.apichannel.test('mr beast')},3000)
    // this.sortData()

  }
  getVideos(): void {
    this.loading = true
    this.apichannel.test('UCAuUUnT6oDeKwE6v1NGQxug');
  }

  changePage(event: any) {
    this.page = event;
  }

  // sortData() {
  //   if (this.data) {
  //     let newar = this.videos.sort((a: any, b: any) => b.title - a.title);
  //     this.data = newar
  //     console.log('oky');
  //   }
  // }

  // loading


}
