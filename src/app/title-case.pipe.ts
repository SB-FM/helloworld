import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) { return null; }
    const pattern = /^[a-z]| (?!of|my|the|is)([a-z])/gm;
    return value.toLowerCase().replace(pattern, (match) => match.toUpperCase());
  }

}
