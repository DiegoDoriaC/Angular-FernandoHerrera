import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroBorrado:string = ''

  heroNames:string[] = ['Spiderman','Iroman','Hulk','She Hulk','Thor'];

  removeLastHero():void{
    this.heroBorrado = this.heroNames.pop()!;
  }

}
