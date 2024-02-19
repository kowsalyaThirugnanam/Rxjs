import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs/operators';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, field:any,fieldValue:any) {
    console.log('field ==>',field,'fieldValue',fieldValue,);
   
    if(value && value.length>0){

    // return  value.filter(function FilterByGender(x:any) {
    //     x[field]==fieldValue;
    //   } )
    return value.filter((x:any)=>x[field]==fieldValue)
    }
  }

}
