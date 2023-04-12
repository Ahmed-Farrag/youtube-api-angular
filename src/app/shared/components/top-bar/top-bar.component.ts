import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VideosService } from 'src/app/inmobly/services/videos.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  constructor(private fb: FormBuilder, private apichannel: VideosService) { }

  form!: FormGroup;
  active: boolean = true
  ngOnInit(): void {
    this.initializeForm();
  }

  // to make shearch input required
  initializeForm(): void {
    this.form = this.fb.group({
      search: ['', Validators.required],
    });
  }

  // method in servece to search by name
  // pass value  
  searchbtn() {
    // console.log(this.form.value.search);
    this.apichannel.searchByName(this.form.value.search);
  }
}
