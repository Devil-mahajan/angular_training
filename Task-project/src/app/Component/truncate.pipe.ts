import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, maxLength:number=60): string {
    if(!value){
      return '';
    }
    return value.substring(0,maxLength) + '...';
  }

}
