import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideosService } from 'src/app/inmobly/services/videos.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  constructor(private fb: FormBuilder, private apichannel: VideosService) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      search: ['', Validators.required],
    });
  }
  searchbtn() {
    // console.log(this.form.value.search);
    this.apichannel.searchByName(this.form.value.search);
  }
}
