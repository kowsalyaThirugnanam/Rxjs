import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomServiceService } from '../../../../../Service/custom-service.service';
import {AddElementDynamicallyService}from '../../../../ReusableCode/AddElement/add-element-dynamically.service';
@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  replaySubjectname :string;
  sub : Subscription;
  sub1 : Subscription;
  username: Array<string>=[];
  subscribebutton:boolean =false;

  constructor(private customService: CustomServiceService,private addElementdynamic:AddElementDynamicallyService) { }

  ngOnInit(): void {
    this.sub = this.customService.replaysubject.subscribe(
      (res)=>{
        console.log(res);
        
      }
    )
  }

  AddUsername(val:string){
   
    this.customService.updateReplaySubject(val);
    this.username.push(val);
    console.log(this.username);
    this.addElementdynamic.ListAddItem(val,'output')
    
  }
  replaysubscribeclick(){
    this.subscribebutton = !this.subscribebutton;
    if(this.subscribebutton){
     this.sub1= this.customService.replaysubject.subscribe(
        (res)=>{
          console.log(res);
          this.addElementdynamic.ListAddItem(res,'output1')
        }
     )
    }
    else{
      this.sub1.unsubscribe()
    }
  
  }
    
  
}
