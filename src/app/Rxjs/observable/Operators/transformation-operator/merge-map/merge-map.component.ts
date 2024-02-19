import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { AddElementDynamicallyService } from '../../../../ReusableCode/AddElement/add-element-dynamically.service';
@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  source = from(['Tech', 'Comedy', 'News']);
  constructor(private addItem: AddElementDynamicallyService) { }


  getData(input: any) {
    return of('Video Uploaded ' + input)
  }

  ngOnInit(): void {

    // =====================Using Map -- we need to subscribe twice (observables of observables ) to get the values

    //   this.source.pipe(map((data) =>  this.getData(data)))
    //     .subscribe(
    //       (res) => {
    //        res.subscribe(
    //          (res1)=>{
    //            console.log(res1);

    //          }
    //        )

    //       }
    //     )
    this.source.pipe(
      map(this.getData)
    )
      .subscribe(
        (res) => {
          // console.log(res);
          this.addItem.ListAddItem(res, 'output1')

        }

      )

      // =============Map + MergeAll ================
      this.source.pipe(
        map(data=>this.getData(data)),
        mergeAll()
      )
      .subscribe(
        (res)=>{
         this.addItem.ListAddItem(res,'output2')
          
        }
      )

      // ================MergeMap = Map+MergeAll===============
      this.source.pipe(
        mergeMap(data=>this.getData(data)),
      
      )
      .subscribe(
        (res)=>{
         this.addItem.ListAddItem(res,'output3')
          
        }
      )
  }

}
