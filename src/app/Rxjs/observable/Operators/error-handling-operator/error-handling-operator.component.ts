import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, retry, retryWhen, scan, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-error-handling-operator',
  templateUrl: './error-handling-operator.component.html',
  styleUrls: ['./error-handling-operator.component.css']
})
export class ErrorHandlingOperatorComponent implements OnInit {

  fetchdata1:boolean=false;
  retrycountres:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  responsedata:[response];
  name='';
  id:number;
  username='';
  fetchdata(){
    this.fetchdata1=true;
    this.http.get<[response]> ('https://jsonplaceholder.typicode.com/users').pipe(
      // retry(3)
      retryWhen(
        err=>err.pipe(
          delay(2000),
          scan((retryCount)=>{
            if(retryCount >= 4){
              throw err
            }
            else{
              retryCount=retryCount+1;
              this.retrycountres=retryCount;
              console.log('retry count =>',retryCount);
              return retryCount;
            }
          },0)
        )
      )
    )
    .subscribe(
      (res)=>{
        this.fetchdata1=false;
        console.log(res[0]);
        this.name = res[0].name;
        this.username =res[0].username;
        this.id=res[0].id
     
        
      },
      (err)=>{
        this.fetchdata1=false;
        console.log(err);
        
      }
    )
  }
}

interface response{
  
    id:number;
    name:string;
    username:string;
}