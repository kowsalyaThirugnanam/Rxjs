import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { BehaviorSubject, from, fromEvent, interval, Observable, of, Subscription } from 'rxjs';
import { take, toArray} from 'rxjs/operators'
import {AddElementDynamicallyService} from '../../../ReusableCode/AddElement/add-element-dynamically.service';

@Component({
  selector: 'app-creation-operator',
  templateUrl: './creation-operator.component.html',
  styleUrls: ['./creation-operator.component.css']
})
export class CreationOperatorComponent implements OnInit,AfterViewInit {

  subscribevar : Subscription;

  behavioursubj = new BehaviorSubject('I am emiting message');
  behavioursubj1= this.behavioursubj.asObservable()

  @ViewChild('addList') addList:ElementRef;
  @ViewChild('intervalbtn') intervalbtn:ElementRef;
  @ViewChild('ofOperator') ofOperator:ElementRef;
  @ViewChild('fromOperator') fromOperator:ElementRef;
  @ViewChild('toArrayClick') toArrayClick:ElementRef;
  @ViewChild('toArrayClick1') toArrayClick1:ElementRef;

  startInterval = interval(1000);
  toArrayInterval = interval(1000);
 
  fromObj=[{name:'kowsi',age:27,gender:'f'}];
 

  constructor( public addItemDynamic:AddElementDynamicallyService) { }

  ngOnInit(): void {
    
   this.behavioursubj1.subscribe(
     res=>{
       console.log('behaviour sub',res);
      //  this.behavioursubNewMessage();
       
     }
   )

  }
  ngAfterViewInit():void{

    this.behavioursubNewMessage();

    var count=0;
   
    fromEvent(this.addList.nativeElement,'click').subscribe(
      data=>{
        console.log('formEvent working' );
        var addList = 'Video'+count++;
        this.addItemDynamic.ListAddItem(addList,'elementlist');
      }
      
    )

    fromEvent(this.intervalbtn.nativeElement,'click').subscribe(
      data=>{
        console.log('Interval triggered');
        this.startInterval.pipe(take(3))
        .subscribe(
          data=>{
            console.log('Interval triggered1');
            this.addItemDynamic.ListAddItem('Interval'+count++,'intervalList');
            
          }
        )
        
      }
    )

    fromEvent(this.ofOperator.nativeElement,'dblclick').subscribe(
      res=>
      {
        console.log('of working');
        of(1,2,3,4).subscribe(
          res=>{
            
            this.addItemDynamic.ListAddItem(res,'ofAns');
            
          }
        )
        
      }
    )

    fromEvent(this.fromOperator.nativeElement,'dblclick').subscribe(
      res=>{
      from(this.fromObj).subscribe(
        res=>{
          console.log(res);
          this.addItemDynamic.ListAddItem(res.name,'ofAns1');
          this.addItemDynamic.ListAddItem(res.age,'ofAns1');
          this.addItemDynamic.ListAddItem(res.gender,'ofAns1');
        }
      )

        
      }
    )

    this.subscribevar=   fromEvent(this.toArrayClick.nativeElement,'click').subscribe(
      res=>{
        this.addItemDynamic.ListAddItem('Fetch data...','toArray')
       this.toArrayInterval.pipe(take(10),toArray())
        .subscribe(
          res=>{
            // console.log('toArray interval',res);
           
            this.addItemDynamic.ListAddItem(res,'toArray')
            this.subscribevar.unsubscribe();
            
          }
        )
      }
    )

    this.subscribevar = fromEvent(this.toArrayClick1.nativeElement,'click').subscribe(
      res=>{
        of('anup','star','sports','super','hero').pipe(toArray())
        .subscribe(
          res=>{
            this.addItemDynamic.ListAddItem(res,'toArray1')
           
            
          }
        )
      }
    )
  }


  behavioursubNewMessage(){
    this.behavioursubj.next('New message');
  }


  // addItemDynamic.ListAddItem(val:any,id:any){
  //   var createElement = document.createElement('li');
  //   createElement.innerText=val;
  //   document.getElementById(id)?.appendChild(createElement);
  // }

  
}



