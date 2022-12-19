import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component implements OnInit {

  phoneArray: any[] = [{
    id: Math.random().toString(36).slice(2),
    phone: ''
  }];
  constructor(
) { }

  ngOnInit(): void {
    console.log()
  }
  add(){
    const temp = {
      id: Math.random().toString(36).slice(2),
      phone: ''
    }
    this.phoneArray.push(temp);
  }

  remove(index:number){
    this.phoneArray.splice(index, 1)
  }

  print(){
    const res = []
    for(let i=1; i<= this.phoneArray.length; i++)
    {
      const ind = "phoneNumber" + i;
      const obj = {
        [ind] : this.phoneArray[i-1].phone,
      }
      res.push(obj);
    }
  console.log(res)

  }
}
