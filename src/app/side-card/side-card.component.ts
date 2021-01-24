import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.css']
})
export class SideCardComponent implements OnInit {

  @Input() id;
  constructor() { }

  ngOnInit() {
  }

}