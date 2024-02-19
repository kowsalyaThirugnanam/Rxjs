import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RxjsProject';
  outputmsg(event:any){
    console.log('message from child',event);
    
  }
}
