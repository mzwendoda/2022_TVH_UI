import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-teams',
  templateUrl: './public-teams.component.html',
  styleUrls: ['./public-teams.component.css']
})
export class PublicTeamsComponent implements OnInit {

  constructor() { }

  showMe:boolean = true

  ngOnInit(): void {

  }
  theMenu()
  {
    this.showMe=!this.showMe
  }

}
