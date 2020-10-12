import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, ...args: any[]): number {
    if (!value) {
      return null;
    }
    return value * 1.60934;
  }
}
