import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {
index: number = 0;
res: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.out();
  }
  out(){
    const num = this.index +1;
    if(this.index % 2 == 0)
    {
      this.res = num * num;
      this.res += 1;
    } else {
      this.res = num * num;
      this.res -= 1;
    }
    console.log(this.res)
  }

}
