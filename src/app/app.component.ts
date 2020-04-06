import { Component } from '@angular/core';
declare const Cesium;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  constructor() {
    console.log(Cesium);
   }
}
