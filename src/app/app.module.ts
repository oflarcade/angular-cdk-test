import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CustomHeaderComponent } from "./custom-header/custom-header.component";
import { MainCardComponent } from "./main-card/main-card.component";
import { SideCardComponent } from "./side-card/side-card.component";
@NgModule({
  imports: [BrowserModule, FormsModule, DragDropModule],
  declarations: [
    AppComponent,
    HelloComponent,
    CustomHeaderComponent,
    MainCardComponent,
    SideCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
