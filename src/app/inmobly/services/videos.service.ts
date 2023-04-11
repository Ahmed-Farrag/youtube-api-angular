import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


import { filter, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  videos: any = [];
  private listner = new Subject<any>();
  reader$ = this.listner.asObservable();

  constructor(public http: HttpClient) { }
  getAllVideos(channel: string): Observable<any> {
    const APIURL = `https://www.googleapis.com/youtube/v3/search?key=${environment.APIKEY}&channelId=${channel}&part=snippet,id&order=date&maxResults=10`;
    return this.http.get(`${APIURL}`);
  }

  test(channel: string) {
    const APIURL = `https://www.googleapis.com/youtube/v3/search?key=${environment.APIKEY}&channelId=${channel}&part=snippet,id&order=date&maxResults=10`;
    return this.http.get(APIURL).subscribe((data) => {
      console.log(data);
      this.listner.next(data);
      this.videos = data;
    });
  }
  getVideoById(id: any) {
    const APIURL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${environment.APIKEY}`;
    return this.http.get(APIURL);
  }
  getVideoStata(id: any) {
    const APIURL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${environment.APIKEY}`;
    return this.http.get(APIURL);
  }


  // getVideos(search: any) {
  //   this.getAllVideos(search).subscribe((data) => {
  //     this.listner.next(data);
  //     this.videos = data.items;
  //   });
  // }

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
