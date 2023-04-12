import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statistec',
  templateUrl: './statistec.component.html',
  styleUrls: ['./statistec.component.scss'],
})
export class StatistecComponent implements OnInit {
  id: any;
  data: any = {};
  constructor(
    private apichannel: VideosService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getVideoStat();

  }

  // make subscribe for api req
  getVideoStat() {
    this.apichannel.getStatisticsVideo(this.id).subscribe((res) => {
      this.data = res;
    });
  }


}
