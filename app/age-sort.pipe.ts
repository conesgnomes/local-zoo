import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name:"ageFilter",
  pure: false
})

export class AgeSortPipe implements PipeTransform {

  transform(input: Animal[], desiredAgeSort) {
    var output: Animal[] = [];

    if(desiredAgeSort === "youngerAnimals") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredAgeSort === "olderAnimals") {
        for (var i = 0; i < input.length; i++) {
          if(input[i].age > 2) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
      return input;
    }
  }
}
