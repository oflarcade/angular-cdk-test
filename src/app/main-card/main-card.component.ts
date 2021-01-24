import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  @Input() id: any
  constructor() { }

  ngOnInit() {
  }

}