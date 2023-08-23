import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdLkr'
})
export class UsdLkrPipe implements PipeTransform {

  //change trupe Unknown-> number
  transform(value: number, ...args: number[]): unknown {
    const[multiplier]=args;
    return value*multiplier;
  }

}
