import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  param =3;
  hData;
  constructor(private http: HttpClient){}
  displayData(data){
    this.hData = data;
  }
  ngOnInit(){
    this.http.get("http://jsonplaceholder.typicode.com/users?id=" + this.param)
    .subscribe(article => this.displayData(article));
  }
}
