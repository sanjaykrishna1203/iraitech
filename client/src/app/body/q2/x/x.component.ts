import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit {

  @Input("Id") id?: number; 
  yArray: number[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.id)
    this.yArray.push(1);
  }
  add(){
    this.yArray.push(this.yArray.length);
  }

}
