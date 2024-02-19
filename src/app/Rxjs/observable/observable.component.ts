import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {


  // =========================create Observables =============================

  Observable$ = new Observable((observer:any)=>{
    observer.next("I am a Obeserver1");

    setInterval(() =>{
      observer.next("I am a Obeserver2");

    },2000)

    // observer.error('Error occured');
   
   
  });




  constructor() { }

  ngOnInit(): void {
    this.fun();
    this.palindrome();
    // ===================subscribe to observables =====================

    var subscribe = this.Observable$.subscribe(
      data=>{
        // console.log(data);
        this.addItems(data)
      },
      error=>{
        console.log(error);
        
      },
     
    )
    var subscribe1 = this.Observable$.subscribe(
      data=>{
        console.log(data);
        
      },
      err =>{
        console.log(err);
        
      }
    )

    // =======================add both subscribed observables ==================

    subscribe.add(subscribe1);

    // ============================Unsubscribe obeservables=================
    // both subscribes are unsubscribed here due to the add method above
    setTimeout(()=> {
      subscribe.unsubscribe()
    },4000)
  }


  addItems(val:any) {
    var createElement = document.createElement('li');
    var enterText = document.createTextNode(val);
    var node = createElement.appendChild(enterText);
    document.getElementById('output')?.appendChild(createElement);
  }

  fun(){
    console.log(1);
    setTimeout(() => {
      console.log(2);
      
    }, 1000);
    setTimeout(() => {
      console.log(3);
      
    }, 0);
    setTimeout(() => {
      console.log(4);
      
    },);
    
  }

  palindrome(){
    let pali = "mam";
    let pali1= pali.split("");
    let pali2 = [];
    let j=pali.length;
    for(let i =0; i<pali.length;i++){
       pali2[i]=pali[j];
      j--;
      console.log(pali2);
      
    }
  }
}
