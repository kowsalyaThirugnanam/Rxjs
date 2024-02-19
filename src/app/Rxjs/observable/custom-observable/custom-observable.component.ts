import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AddElementDynamicallyService} from '../../ReusableCode/AddElement/add-element-dynamically.service';


@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {

  stylestatus='';
  custObs1 = new Observable((Observar:any)=> {
    setTimeout(() => {
      Observar.next('Angular')
    }, 1000);
    setTimeout(() => {
      Observar.next('Typescript')
    }, 2000);
    setTimeout(() => {
      // Observar.next('Javascript')
      Observar.complete('completed');
    }, 3000);
    setTimeout(() => {
      Observar.error('error emitted')
    }, 4000);
  
  })

  

  constructor(public addItemDynamic:AddElementDynamicallyService) { }

  ngOnInit(): void {
    this.custObs1.subscribe(
      (data)=>{
        
        this.addItemDynamic.ListAddItem(data,'manuallist');
      
      },
      (error)=>{
        setTimeout(() => {
          this.stylestatus= 'error';
        }, 1000);
      },
      ()=>{
        setTimeout(() => {
          this.stylestatus='complete';
         }, 2000);
      }
    )
  }

}
