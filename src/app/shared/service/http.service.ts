import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class HttpService {
  constructor(private http : HttpClient){}
    getData(): Observable<{id : number}>{
    return  this.http.get<{id : number}>('https://jsonplaceholder.typicode.com/todos/1')
       
    }
    
}
