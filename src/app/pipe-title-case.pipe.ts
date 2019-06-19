import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTitleCase'
})
export class PipeTitleCasePipe implements PipeTransform {

  transform(value: string): any {

    let prepositions = ['of', 'with', 'the'];
    if (!value)
      return null;
    else {
      let words = value.split(' ');
      for( var i=0; i < words.length; i++) {
        if(i > 0 && (prepositions.includes(words[i].toLowerCase()))) {
          words[i] = words[i].toLowerCase();
        }
        else {
          words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase();
        }
      }
      return words.join(' ');
    }
  }

}
