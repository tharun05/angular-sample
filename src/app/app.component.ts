import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  constructor(private http: HttpClient){
    this.http.get<any>('http://3.137.208.83:5000/home').subscribe(data => {
     
  })
  }
}
