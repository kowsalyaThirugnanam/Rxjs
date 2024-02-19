import { Component, OnInit, OnDestroy, ElementRef, ViewChild,  AfterViewInit } from '@angular/core';
import { from, fromEvent, interval, of, Subscription } from 'rxjs';
import { debounceTime, map, pluck, take, toArray } from 'rxjs/operators';
import { AddElementDynamicallyService } from '../../../ReusableCode/AddElement/add-element-dynamically.service';


@Component({
  selector: 'app-transformation-operator',
  templateUrl: './transformation-operator.component.html',
  styleUrls: ['./transformation-operator.component.css']
})
export class TransformationOperatorComponent implements OnInit, OnDestroy,AfterViewInit {

  msg1interval = interval(4000);
  Message1: any
  sub1: Subscription;

  msg2interval = interval(4000);
  Message2: any
  sub2: Subscription;

  msg3Object = from([
    { id: 1, name: 'krish', gender: 'f' },
    { id: 2, name: 'Anup', gender: 'f' },
    { id: 3, name: 'krishna', gender: 'f' },
    { id: 4, name: 'priya', gender: 'f' }

  ])
  sub3: Subscription;

  pluckname: Array<string> = [];
  nestedObject = from([
    {
      id: 1, name: 'krish', gender: 'f', job: {
        name: 'developer',
        tech: 'Java'
      }
    },
    {
      id: 2, name: 'Anup', gender: 'f', job: {
        name: 'devops',
        tech: 'Fullstack'
      }
    },
    {
      id: 3, name: 'krishna', gender: 'f', job: {
        name: 'tester',
        tech: 'Python'
      }
    },
    {
      id: 4, name: 'priya', gender: 'f', job: {
        name: 'Architech',
        tech: 'Embedded'
      }
    }

  ]);
  plucknestedvalue: Array<string>;

  @ViewChild('debouncesearchbox') debouncesearchbox:ElementRef
  debounceresp='';
  constructor(public addItemDynamic: AddElementDynamicallyService) { }

  ngOnInit(): void {

    // ===============map is used to transform the stream of data=============

    this.sub1 = this.msg1interval.pipe(
      map(data => 'Video' + data)
    )
      .subscribe(
        (res) => {
          this.Message1 = res;

        }
      )

    this.sub2 = this.msg2interval.pipe(
      map((data) => data * 10)
    )
      .subscribe(
        (res) => {
          this.Message2 = res;

        }
      )

    this.sub3 = this.msg3Object.pipe(
      map(data => data.name)
    )
      .subscribe(
        (res) => {

          this.addItemDynamic.ListAddItem(res, 'output');

        }
      )

    // ===============map is used to transform the stream of data=============

    // ================Pluck is used to access the value in any object directly using its key ==========
    this.msg3Object.pipe(
      pluck('name'),
      toArray()
    )
      .subscribe(
        (res) => {
          this.pluckname = res;
          
        }
      )

    this.nestedObject.pipe(
      pluck('job','tech'),
      toArray()
    )
    .subscribe(
      (data)=>{
       this.plucknestedvalue =data;
        
      }
    )

   // ================Pluck is used to access the value in any object directly using its key ==========

  
  }

  ngAfterViewInit(){

    // ================Debouncing Timer ===============
   const debouncesearchtext =  fromEvent<any>(this.debouncesearchbox.nativeElement,'keyup')
  
   debouncesearchtext.pipe(
     map(event=>event.target.value),
     debounceTime(1000)
   )
   .subscribe(
     res =>{
     
       this.debounceresp=res;
       
     }
   )
    

  }


  ngOnDestroy() {
    this.sub1.add(this.sub2).add(this.sub3)
    this.sub1.unsubscribe();


  }

}
