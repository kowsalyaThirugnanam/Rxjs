import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  @Input('inputmsg') inputmsg:string;
  @Output('outputmsg') outputmsg =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('parent message:',this.inputmsg);

    this.outputmsg.emit('Nice to see you parent')
    
  }

}
