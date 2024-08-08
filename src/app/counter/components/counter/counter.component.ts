import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-counter',
  template: `

    <h1>Hola Counter</h1>
    <h3>{{ title }}</h3>
    <p>Contador: {{ contador }}</p>
    <button (click)="sumar(7)">Subir</button>
    <button *ngIf="contador >-1" (click)="restar(7)">Bajar</button>
    <button (click)="reestablecer()">Reestablecer</button>

  `
})

export class CounterComponent {

  constructor() { }

  public title:string = "Contador de Abajo";
  public contador:number = 40;

  sumar(numero:number):void {
    this.contador += numero;
  }

  restar(numero:number):void {
    this.contador -= numero;
  }

  reestablecer():void {
    this.contador = 40;
  }

}
