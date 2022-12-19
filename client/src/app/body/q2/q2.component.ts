import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {

  xArray: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.xArray.push(1);
    console.log(this.xArray);
  }
  add(){
    this.xArray.push(this.xArray.length);
    console.log(this.xArray);
    
  }

}
