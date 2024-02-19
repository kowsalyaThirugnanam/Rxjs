import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { AddElementDynamicallyService } from '../../../../ReusableCode/AddElement/add-element-dynamically.service';
@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  source = from(['Tech', 'Comedy', 'News']);
  constructor(private addItem: AddElementDynamicallyService) { }


  getData(input: any) {
    return of('Video Uploaded ' + input).pipe(delay(2000))
  }


  ngOnInit(): void {
  //  ==============Map==============
  this.source.pipe(
    map(this.getData)
   )
     .subscribe(
       (res) => {
         console.log('this',res);
         this.addItem.ListAddItem(res, 'output4')
 
       }
 
     )

  // ==============MergeMap===============
  this.source.pipe(
    mergeMap(this.getData)
   )
     .subscribe(
       (res) => {
         console.log('this',res);
         this.addItem.ListAddItem(res, 'output2')
 
       }
 
     )

  // ==============ConcatMap=============

  this.source.pipe(
    concatMap(this.getData)
  )
  .subscribe(
    (res)=>{
     this.addItem.ListAddItem(res,'output3')
      
    }
  )
  }

}
