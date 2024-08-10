import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable(
  {providedIn: 'root'}
)

export class DbzService {

  characters:Character[] = [
    {name: 'Gohan', power: 2500},
    {name: 'Trunks', power: 7500},
    {name: 'Roshi', power: 4750}
  ];

  addCharacter(character:Character):void{
    this.characters.push(character);
  }

  recibirID(id:number):void{
    this.characters.splice(id, 1);
  }

}
