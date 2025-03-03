import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListComponent} from "./list/list.component";
//Uisng @ to describe metadata (data about data)
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//App Component Class
export class AppComponent {
  count: number = 0; // number (increasing number)
  title = 'data-binding-app';
  show: boolean = true; // hidden var
  //Button Clicked Function
  onButtonClick() {
    this.count++;
  }
  //Star Clicked Function
  //Double Click Function
  onStarDBLClicked() {
    if (this.show) {
      this.show = false;
    }
    else {
      this.show = true;
    }
  }
  

}


