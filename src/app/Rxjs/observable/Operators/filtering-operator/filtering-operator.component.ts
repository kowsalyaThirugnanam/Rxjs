import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, pluck, take, takeLast, takeUntil, takeWhile, toArray } from 'rxjs/operators';
import { AddElementDynamicallyService } from '../../../ReusableCode/AddElement/add-element-dynamically.service';

@Component({
  selector: 'app-filtering-operator',
  templateUrl: './filtering-operator.component.html',
  styleUrls: ['./filtering-operator.component.css']
})
export class FilteringOperatorComponent implements OnInit, AfterViewInit {

  Object1 = from([
    { id: 1, name: 'krish', gender: 'f' },
    { id: 2, name: 'Anup', gender: 'M' },
    { id: 3, name: 'krishna', gender: 'M' },
    { id: 4, name: 'priya', gender: 'f' },
    { id: 5, name: 'kishore', gender: 'M' },
    { id: 6, name: 'Josh', gender: 'M' },
    { id: 7, name: 'Rama', gender: 'f' },
    { id: 8, name: 'Mani', gender: 'M' }

  ])

  data1: any;
  data2: any;
  data3: any;

  @ViewChild('distinuntilchangesearchbox') distinuntilchangesearchbox: ElementRef
  distinuntilchangeres = '';
  constructor(public addItemDynamic: AddElementDynamicallyService) { }

  ngOnInit(): void {

    // ======================filter operator====================
    this.Object1.pipe(
      filter(member => member.name.length > 6),
      toArray()
    )
      .subscribe(
        (res) => {

          this.data1 = res;
        }
      )

    this.Object1.pipe(

      filter((member) => member.gender == 'f'),
      toArray(),
    )
      .subscribe(
        (res) => {
          this.data2 = res;

        }
      )

    this.Object1.pipe(
      filter((member) => member.id <= 5),
      toArray()
    )
      .subscribe(
        (data) => {
          this.data3 = data;

        }
      )

    // ======================filter operator====================

    // =========================take operator==================================
    this.Object1.pipe(

      pluck('name'),
      take(5)
    )
      .subscribe(
        (res) => {

          this.addItemDynamic.ListAddItem(res, 'output1')

        }
      )

    this.Object1.pipe(
      map(data => data.name),
      takeLast(5)
    )
      .subscribe(
        (res) => {
          console.log(res);
          this.addItemDynamic.ListAddItem(res, 'output2')
        }
      )

    const condition = fromEvent(document, 'click');
    const interval1 = interval(2000);
    interval1.pipe(
      takeUntil(condition)
    )
      .subscribe(
        (res) => {
          this.addItemDynamic.ListAddItem(res, 'output3')

        }
      )
    // ===========================take operator=======================



  }
  ngAfterViewInit() {
    // =========================distinuntilchange======================
    const distinevent = fromEvent<any>(this.distinuntilchangesearchbox.nativeElement, 'keyup');
    distinevent.pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    )
      .subscribe(
        res => {
          
          this.distinuntilchangeres = res;
        }

      )
    // =========================distinuntilchange======================
  }


}
