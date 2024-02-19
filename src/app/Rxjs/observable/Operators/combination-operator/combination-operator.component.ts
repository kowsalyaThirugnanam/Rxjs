import { Component, OnInit } from '@angular/core';
import { AddElementDynamicallyService } from '../../../ReusableCode/AddElement/add-element-dynamically.service';
import { concat, interval, merge, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-combination-operator',
  templateUrl: './combination-operator.component.html',
  styleUrls: ['./combination-operator.component.css']
})
export class CombinationOperatorComponent implements OnInit {


  // techvideo: Subscription;
  // comedyvideo: Subscription;
  // newsvideo: Subscription;

  constructor(private addItem: AddElementDynamicallyService) { }

  ngOnInit(): void {
    const techvideo = interval(2000).pipe(map(data => 'TechVideo #' + data), take(5));
    const comedyvideo = interval(1000).pipe(map(data => 'comedyVideo #' + data), take(5));
    const newsvideo = interval(1500).pipe(map(data => 'newsVideo #' + data), take(5));

    const finalObservableconcate =concat(techvideo, comedyvideo,newsvideo);
    finalObservableconcate.subscribe(
      (res)=>{
        this.addItem.ListAddItem(res,'output');
      }
    )

    const finalObservableMerge = merge(techvideo,comedyvideo,newsvideo).subscribe(
      (res)=>{
        this.addItem.ListAddItem(res,'output1')
      }
    )
  }

}
