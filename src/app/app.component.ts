import { Component, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public variable:string = "Hola Mundo"
  public title = this.variable;

  AppComponent(){}

}
