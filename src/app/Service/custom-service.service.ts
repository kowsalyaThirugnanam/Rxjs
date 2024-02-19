import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

  subjectusername = new Subject<string>();

  behavioursubusername = new BehaviorSubject('Initial value');

  replaysubject = new ReplaySubject(3);

  asyncsubject = new AsyncSubject();

  constructor() { }

  updateSubject(val:string){
    this.subjectusername.next(val);
  }
  updateBehaviourSubject(val:string){
    this.behavioursubusername.next(val);
  }

  updateReplaySubject(val:string){
    this.replaysubject.next(val);
  }

  updateAsyncSubject(val:string){
    this.asyncsubject.next(val);
  }

  CompleteAsyncSubject (){
    this.asyncsubject.complete();
  }
}
