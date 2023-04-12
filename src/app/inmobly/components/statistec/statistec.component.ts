import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {

  }
  ngOnInit(): void {
    this.getVideoStatics();
  }

  // make subscribe for api req
  getVideoStatics() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.apichannel.getStatisticsVideo(this.id).subscribe((res) => {
      this.data = res
    }, error => {
      this.toastr.error('Missing to load data', error);
    })
  }


}
