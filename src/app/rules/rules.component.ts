import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  constructor() { }

  showMe:boolean = true

  ngOnInit(): void {

  }
  theMenu()
  {
    this.showMe=!this.showMe
  }

}
