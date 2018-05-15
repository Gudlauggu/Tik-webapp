import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tik-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  uploadClicked() {
    console.log('upload button clicked');
  }

  saveClicked() {
    console.log('save button clicked');
  }

}
