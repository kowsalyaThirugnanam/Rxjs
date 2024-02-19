import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from, fromEvent, Observable } from 'rxjs';
import { take } from 'rxjs/operators'
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-technical-questions',
  templateUrl: './technical-questions.component.html',
  styleUrls: ['./technical-questions.component.css']
})
export class TechnicalQuestionsComponent implements OnInit {

  @ViewChild('viewchild', { static: false }) viewchild: ElementRef;

  loginform= new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  obj = {
    name: 'kowsi',
    age: 27,
    gender:'f'

  }

  filter=[
    {
      name: 'kowsi1',
      age: 27,
      gender:'f'
  
    },
    {
      name: 'muthu',
      age: 28,
      gender:'m'
  
    }, {
      name: 'meena',
      age: 27,
      gender:'f'
  
    }, {
      name: 'kowsi',
      age: 27,
      gender:'f'
  
    }
  ]
  keys: any;
  values: any;
  objtoarray: any;

  array = [
    ['name', 'kowsi'],
    ['age', 27]
  ]
  arraytoObj: any;
  fromEvent$ = fromEvent(document.getElementsByTagName('p'), 'click').pipe(take(10));
  checkPalindrome = "";
  paliAns: any
  startEndWith = "String Start with and End With";
  startEndWithAns: boolean[] = [];
  // fromEvent$=fromEvent( document.querySelectorAll('#sumOfArray p'),'click')

  duplicateArray = ['1', '2', 'A', 'A', '1', '2']
  uniqueArray: any;
  uniqueArray1:any;
  constructor() { }

  ngOnInit(): void {

    this.checkObjIsArray();

    this.letvar();
    
    // const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // for (let i = 0; i < 10; i++) {
    //   setTimeout(() => {
    //     console.log(a[i]);
    //   }, 4000);


    // }

    this.fromEvent$.subscribe(
      data => {
        this.arraySum();
      }
    )
  }
  ngAfterViewInit(): void {

    this.viewchild.nativeElement.focus();


  }

  //  =======================Reverse the string ======================
  reverseme() {
    var str = document.getElementById('reverseme')?.innerHTML;
    //  console.log(str?.split(" "));
    // var reverseEachStr = str?.split(" ")[0];

    // console.log(reverseEachStr);

    //  var reverseEachStr1 =
    this.addItem(str?.split("").reverse().join(""), 'reversedtext')

  }

  // ===============================array sum====================
  arraySum() {
    var array = [1, 2, 3, 4, 5];
    var ArraySum = 0;
    ArraySum = array.reduce((initialvalue, nextvalue) => {
      return initialvalue + nextvalue
    })
    this.addItem(ArraySum, 'arraysum')
  }

  //  ==========================ObjToArray========================
  ObjToArray() {
    this.keys = Object.keys(this.obj);
    this.values = Object.values(this.obj);
    this.objtoarray = Object.entries(this.obj)
  }

  //  ===============================arrayToObj =======================
  arrayToObj() {
    this.arraytoObj = { ...this.array };
    console.log({ ...this.array });
    console.log(Object.keys(this.arraytoObj));
    console.log(Object.entries(this.arraytoObj));
    


  }
  // =====================palindrome===================
  palindrome() {
    console.log('palindrome', this.checkPalindrome);

    if (this.checkPalindrome.toLowerCase().split('').reverse().join('') == this.checkPalindrome.toLowerCase()) {
      this.paliAns = 'its a Palindrome';

    }
    else {
      this.paliAns = 'its not a Palindrome';
    }

    // ==================Start With End With ================

  }
  startEndWithfun() {
    this.startEndWithAns.push(this.startEndWith.startsWith('String'));
    this.startEndWithAns.push(this.startEndWith.startsWith('Other'));
    this.startEndWithAns.push(this.startEndWith.endsWith('With'));

    console.log(this.startEndWithAns);


  }

  // =====================remove duplicat elements in array==============
  removeDuplicateElement() {

    this.uniqueArray = new Set(this.duplicateArray);
    console.log(this.uniqueArray);

   
    this.uniqueArray1= this.duplicateArray.filter((value, index) => {
      console.log(value,index);
      // duplicateArray = ['1', '2', 'A', 'A', '1', '2']
     return this.duplicateArray.indexOf(value)== index;
    }

    )
    console.log('new unique menthod',this.uniqueArray1);
    
  }

  replaceStringGlobally(){
    var a= "good is good";
    console.log(a.replace(/good/gi,'best'));
    
  }
  OnlyStringallowed(input:any){
   var validate = /^[a-zA-z]+$/
  // var validate = /^[0-9]+$/
    if(input.match(validate)){
      console.log(true);
       
    }
  }
  checkObjIsArray(){
    var check1={name:'a',b:'a'};
    var check2=[1,2,3,4,5];
    console.log(typeof(check1),typeof(check2));
    console.log(Array.isArray(check1),Array.isArray(check2));
    var a=1;
    var b=3.4;
    console.log(`number is integeter ${a}= ${Number.isInteger(a)} , ${b}= ${Number.isInteger(b)}`);
    
    
  }
  filterbyname(){

  }
  submit(ngForm:any){
    console.log(ngForm);
    
  }

  addItem(val: any, id: string) {
    var CreateElement = document.createElement('p');
    var text = document.createTextNode(val);
    CreateElement.appendChild(text);
    document.getElementById(id)?.appendChild(CreateElement);
  }

  letvar(){
    let d=40;
    const e =50;
    var f=60;
    if(true){
      let a =10;
      var b =10;
      const c= 20;
     
      // console.log(d);
      // d=50;
      // console.log(d);
      // e=60;  e is constant.not reassign
      let d =45;
      console.log(f);
      f=65;
      console.log(f);
      
      var f =60;
      console.log(f);
      
     
    }
    
    // console.log(c);
    // console.log(a);
    
    console.log(b);
    
  }

}
