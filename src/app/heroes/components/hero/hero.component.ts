import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'Ironman';
  public age:number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = "Spider-Man";
  }

  changeAge():void {
    this.age = 25;
  }

  reset():void {
    // this.name = "Ironman";
    this.age = 45;
    document.querySelectorAll('h1')!.forEach( elemento => elemento.innerHTML = `<h1>Hola desde Angular</h1>`);
  }

}
