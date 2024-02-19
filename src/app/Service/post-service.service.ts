import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http:HttpClient) { }

  httpcall(input:any):Observable<httpcall>{
    var url='https://jsonplaceholder.typicode.com/todos/1';

   return this.http.post<httpcall>(url,input);
  }

  httpUsingInterceptorcall(){
    var url = '/1'
    return this.http.get(url)
  }
}

interface httpcall{
  name:string;
  age:number;
}