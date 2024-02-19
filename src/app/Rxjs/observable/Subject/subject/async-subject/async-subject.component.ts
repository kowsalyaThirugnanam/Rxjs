import { Component, OnInit } from '@angular/core';
import { CustomServiceService } from '../../../../../Service/custom-service.service';
import { AddElementDynamicallyService} from '../../../../ReusableCode/AddElement/add-element-dynamically.service';
@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {


  constructor(private customService: CustomServiceService,public addItemDynamic:AddElementDynamicallyService) { }

  ngOnInit(): void {
    this.customService.asyncsubject.subscribe(
      (res)=>{
        console.log('last emited value', res);
     
        
      }
    )
  }

  updateUsername(val:string){
      
    this.customService.updateAsyncSubject(val);
   
  }
  completeSubscription(){
    this.customService.CompleteAsyncSubject();
  }
}
