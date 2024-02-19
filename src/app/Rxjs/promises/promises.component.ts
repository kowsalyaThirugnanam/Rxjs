import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  HpAvailable() {
    return true
  }
  DellAvailable() {
    return false
  }


  promisevariable1 = new Promise((resolve: any, reject: any) => {
    if (this.HpAvailable()) {
      setTimeout(() => {
        return resolve('Hp available')
      }, 3000);

    } else if (this.DellAvailable()) {
      setTimeout(() => {
        return resolve('Dell Available')
      }, 3000);
    } else {
      setTimeout(() => {
        return reject('Both not available')
      }, 3000);
    }
  })

  constructor() { }

  ngOnInit(): void {

    this.promisevariable1.then(
      data => {
        this.addItem(data)

      }
    ).catch(
      err => {
        console.log(err);

      }
    )
  }

  HpLaptopDetails = {
    name: 'hp',
    color: 'black',
    ram: '16gb'
  }

  promisevariable2 = new Promise((resolve, reject) => {
    resolve(this.HpLaptopDetails)

  })

  Promisefun1() {
    var res1 = document.getElementById('result1') as HTMLInputElement;
    res1.innerHTML = 'Fetch data...';
    this.promisevariable2.then(res => {
      setTimeout(() => {
        res1.innerHTML = JSON.stringify(res);
      }, 2000);
    }
    )

  }
  async asyncAwait() {
    var res2 = document.getElementById('result2') as HTMLInputElement;
    res2.innerHTML = 'Fetch data ...';
    var res = await this.promisevariable2;
    setTimeout(() => {
      res2.innerHTML = JSON.stringify(res);
    }, 2000);
  }
  fetchApi() {
    var res3 = document.getElementById('result3') as HTMLInputElement;
    res3.innerHTML = 'Fetch Data ...';
    fetch('https://jsonplaceholder.typicode.com/posts').then(
      response => {
        res3.innerHTML = JSON.stringify( response.json());
       
      }
    )
  }



  addItem(val: any) {
    var createElement = document.createElement('li');
    var text = document.createTextNode(val);
    createElement.appendChild(text);
    document.getElementById('output')?.appendChild(createElement)
  }
}
