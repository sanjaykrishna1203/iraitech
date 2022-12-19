import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.css']
})
export class YComponent implements OnInit {

  @Input("Yid") yId?: number;
  @Input("Xid") xId?: number;
  name: string = ""
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  callServer(file: any) {
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post('http://127.0.0.1:3000/ping', JSON.stringify(file), {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
    });
  }
  save(){
    console.log(this.xId, this.yId, this.name)
    const temp = {
      xId : this.xId,
      yId: this.yId,
      Name: this.name
    }
    this.callServer(temp);
  }
}
