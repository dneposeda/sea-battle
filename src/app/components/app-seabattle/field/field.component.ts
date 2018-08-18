import { Component, OnInit } from '@angular/core';

import { Coordinates } from '../../../Coordinates'

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  private fieldSize: number = 10;
  private rowY: Array<number> = [];
  private colX: Array<number> = [];
  private cells:Array<Coordinates> = []

  constructor() { }

  ngOnInit() {

    for (let i = 1; i <= this.fieldSize; i++) {
      for (let j = 1; j <= this.fieldSize; j++) {
        this.cells.push({x:i, y:j})
      }
      this.colX.push(i)
      this.rowY.push(i)
    }
    console.log(this.cells);
    console.log('rowY', this.rowY);
    console.log('ColX', this.colX);
  }

}