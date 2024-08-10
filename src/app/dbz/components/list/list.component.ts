import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDeleteId:EventEmitter<number> = new EventEmitter();


  //IMPORTACION DE DATOS DESDE EL PADRE
  @Input()
  characterList:Character[] = [];


  onDeleteCharacter(index:number):void{
    //TODO: Emitir el ID del personaje
    this.onDeleteId.emit(index)
  }

}
