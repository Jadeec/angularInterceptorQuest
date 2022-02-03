import { Component, OnInit } from '@angular/core';
import { HttpService } from './shared/service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  constructor(private httpservice : HttpService){

  }
  ngOnInit(){
    this.httpservice.getData().subscribe((response)=> 
    console.log(response))
  }
}
