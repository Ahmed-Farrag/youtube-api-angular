import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  videos: any = [];
  private listner = new Subject<any>();
  reader$ = this.listner.asObservable();

  constructor(public http: HttpClient, private toastr: ToastrService) { }

  // to get All video by id from api and landle error 
  getAllVideos(channel: string) {
    const APIURL = `https://www.googleapis.com/youtube/v3/search?key=${environment.APIKEY}&channelId=${channel}&part=snippet,id&order=date&maxResults=20`;
    return this.http.get(APIURL).subscribe((data) => {
      this.listner.next(data);
      this.videos = data;
    }, error => {
      this.toastr.error('Missing to load data', error);
    });
  }

  // to get video by id from api
  getVideoById(id: any) {
    const APIURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${environment.APIKEY}`;
    return this.http.get(APIURL);
  }

  // to get Statistics object in api
  getStatisticsVideo(id: any) {
    const APIURL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${environment.APIKEY}`;
    return this.http.get(APIURL);
  }

  // method to search by name in navbar comp
  searchByName(search: any) {
    var videos = this.videos.items;
    var filtered: any[] = [];

    videos.forEach((video: any) => {
      if (video.snippet.title.toLowerCase().includes(search)) {
        filtered.push(video);
      }
    });
    var object = { items: filtered };
    this.listner.next(object);
  }
}
