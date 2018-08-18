import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  maker: string = 'Denis Tivikov';
  year: number = Date.now();


  constructor() { }

  ngOnInit() {
  }

}
