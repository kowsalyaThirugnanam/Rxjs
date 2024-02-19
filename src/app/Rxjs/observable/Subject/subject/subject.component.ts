import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomServiceService } from '../../../../Service/custom-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  sub1: Subscription;
  sub2: Subscription;
  username1: string;
  username2: string;
  constructor(private customService: CustomServiceService) { }

  ngOnInit(): void {
    this.sub1 = this.customService.subjectusername.subscribe(
      (res) => {

        this.username1 = res;

      }
    )
    this.sub2 = this.customService.behavioursubusername.subscribe(
      (res) => {
        this.username2 =res;
        // console.log(res);

      }
    )

  }

  updateUsername(val: string) {
   
    this.customService.updateSubject(val);
  }
  updateUsername1(val: string) {
    console.log(val);
    
    this.customService.updateBehaviourSubject(val);
  }

}
