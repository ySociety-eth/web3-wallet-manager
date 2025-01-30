import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number = 8, mode: 'middle' | 'end' = 'middle'): string {
    if(!value) return '';
    
    if(mode === 'middle') {
      return value.substring(0, 4) + '...' + value.substring(value.length - 4, value.length);
    } else {
      return value.substring(0, length) + '...'
    }
  }

}
