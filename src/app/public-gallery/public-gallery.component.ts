import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-gallery',
  templateUrl: './public-gallery.component.html',
  styleUrls: ['./public-gallery.component.css']
})
export class PublicGalleryComponent implements OnInit {

  constructor() { }
  showMe:boolean = true

  ngOnInit(): void {

  }
  theMenu()
  {
    this.showMe=!this.showMe
  }
}
