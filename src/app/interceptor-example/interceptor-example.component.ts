import { Component, OnInit } from '@angular/core';
import { PostServiceService} from '../Service/post-service.service';

@Component({
  selector: 'app-interceptor-example',
  templateUrl: './interceptor-example.component.html',
  styleUrls: ['./interceptor-example.component.css']
})
export class InterceptorExampleComponent implements OnInit {

  res1:any
  constructor(private http:PostServiceService) { }

  ngOnInit(): void {
  }
  getdata(){
    this.http.httpUsingInterceptorcall().subscribe(
      (data)=>{
        console.log(data);
        this.res1=data;
        
      },
      (err)=>{
        console.log(err);
        
      }
    )

  }

 
}
