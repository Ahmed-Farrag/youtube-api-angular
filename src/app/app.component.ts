import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inmobly-farrag';
  // handle load in offline
  isDplay: boolean = true
  constructor(private router: Router) { }
  ngOnInit(): void {
    if (!window.navigator.onLine) {
      this.isDplay = false
      this.router.navigate(['offline'])
    } else {
      this.isDplay = true
      this.router.navigate(['home'])
    }
  }


}
