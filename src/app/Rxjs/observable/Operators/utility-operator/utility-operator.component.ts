import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AddElementDynamicallyService } from '../../../ReusableCode/AddElement/add-element-dynamically.service';


@Component({
  selector: 'app-utility-operator',
  templateUrl: './utility-operator.component.html',
  styleUrls: ['./utility-operator.component.css']
})
export class UtilityOperatorComponent implements OnInit {

  interval = interval(1000);
  interval1 = interval(1000);
  subscription1: Subscription;
  subscription2: Subscription;

  Namelist = ['Anup', 'hari', 'henna', 'baalu', 'baanu'];
  Colorlist=['red','blue','green','yellow','brown','pink'];
  colorpalet='red';
  constructor(public addItemDynamic: AddElementDynamicallyService) { }

  ngOnInit(): void {
    this.subscription1 = this.interval.pipe(

      tap((data) => {
        if (data == 4) {
          this.subscription1.unsubscribe();
        }
      }),
      map(data => { return this.Namelist[data] }

      ),
    )
      .subscribe(
        (res) => {
          
          this.addItemDynamic.ListAddItem(res, 'output')

        }
      )

    this.subscription2= this.interval1.pipe(
      tap(
        data=>{
          if(data == this.Colorlist.length)
          this.subscription2.unsubscribe()
        }
      ),
      map(
        data=> this.Colorlist[data]
      )
    )
    .subscribe(
      (res)=>{
        console.log(res);
        this.colorpalet = res;
        this.addItemDynamic.ListAddItem(res,'output1')
        
      }
    )

  }

}
