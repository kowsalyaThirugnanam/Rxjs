import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddElementDynamicallyService {

  constructor() { }

  ListAddItem(val:any,id:string){
    var createElement= document.createElement('li');
    createElement.innerText=val;
    document.getElementById(id)?.appendChild(createElement);
  }
}
