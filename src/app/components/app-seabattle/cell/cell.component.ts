import { Component, OnInit, Input } from '@angular/core';

import { Coordinates } from '../../../Coordinates'

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input() x;
  @Input() y;

  constructor() { }

  ngOnInit() {

  }

  clickCell(){
    console.log(this.x+1, this.y+1)
  }

}
