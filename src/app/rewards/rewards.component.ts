import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  constructor() { }

  showMe:boolean = true

  ngOnInit(): void {

  }
  theMenu()
  {
    this.showMe=!this.showMe
  }
}
