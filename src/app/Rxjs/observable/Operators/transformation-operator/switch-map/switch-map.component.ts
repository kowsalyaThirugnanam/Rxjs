import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeAll, switchAll, switchMap } from 'rxjs/operators';
import { AddElementDynamicallyService } from '../../../../ReusableCode/AddElement/add-element-dynamically.service';
@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {
  source = from(['Tech', 'Comedy', 'News']).pipe(delay(1000));
  constructor(private addItem: AddElementDynamicallyService) { }


  getData(input: any) {
    return of('Video Uploaded ' + input)
  }

  ngOnInit(): void {

    // ================Map======================
    this.source.pipe(
      map(this.getData)
    )
    .subscribe(
      (res)=>{
       this.addItem.ListAddItem(res,'output4')
        
      }
    )

    // ========================Map+SwitchAll================
    this.source.pipe(
     map((data)=>{
     return  this.getData(data)
     }),
      switchAll()
    )
    .subscribe(
      (res)=>{
        console.log(res);
        this.addItem.ListAddItem(res,'output5');
        
      }
    )

    // ===================SwitchMap=================
    this.source.pipe(
      switchMap(this.getData),
    )
    .subscribe(
      (res)=>{
        console.log(res);
        this.addItem.ListAddItem(res,'output6');
        
      }
    )
  }

}
