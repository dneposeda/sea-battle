import { Component, OnInit } from '@angular/core';

import { FieldService } from '../../../fuild.service';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  constructor(private cellArray: FieldService) { }

  ngOnInit() {

    console.log('rowY', this.cellArray.rowY);
    console.log('ColX', this.cellArray.colX);
  }

}