import { Component, VERSION } from "@angular/core";
import {
  CdkDragDrop,
  CdkDropList,
  CdkDragEnd,
  moveItemInArray,
  transferArrayItem,
  copyArrayItem,
  CdkDragStart
} from "@angular/cdk/drag-drop";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 }
  ];
  responsible: [];
  notResponsible: [];

  constructor() {}

  drop(event) {
    console.log(event.container.item);
  }
}
