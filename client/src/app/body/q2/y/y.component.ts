import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {

  @Input("Yid") yId: number = 0;
  @Input("Xid") xId: number = 0;
  name: string = ""
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.xId, this.yId);
  }

  callServer(file: any) {
    console.log("calling server");
    
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post('http://127.0.0.1:3000/ping', JSON.stringify(file), {
      headers: headers
    })
    .subscribe(data => {
      console.log(data), "doen";
    });
  }
  save(){
    const temp = {
      xId : this.xId,
      yId: this.yId,
      Name: this.name
    }
    this.callServer(temp);
  }
}
