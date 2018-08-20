import { Injectable } from '@angular/core';
import { Coordinates } from './Coordinates'

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private fieldSize: number = 10;
  public rowY: Array<number> = [];
  public colX: Array<number> = [];
  public cells:Array<Coordinates> = []

  constructor() { 
    for (let i = 1; i <= this.fieldSize; i++) {
      for (let j = 1; j <= this.fieldSize; j++) {
        this.cells.push({x:i, y:j})
      }
      this.colX.push(i);
      this.rowY.push(i);
    }
  }


}
