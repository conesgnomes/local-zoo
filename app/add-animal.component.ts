import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'add-animal',
  template: `
    <button>New Animal</button>
    <div class="animal-add">
      <input #species type="text" placeholder="Species">
      <input #name type="text" placeholder="Species">
      <input #age type="text" placeholder="Species">
      <input #diet type="text" placeholder="Species">
      <input #zooLocation type="text" placeholder="Species">
      <input #caretakers type="text" placeholder="Species">
      <input #sex type="text" placeholder="Species">
      <input #like type="text" placeholder="Species">
      <input #dislike type="text" placeholder="Species">
      <button (click)="addAnimal(species.value,name.value,age.value,diet.value,zooLocation.value,caretakers.value,sex.value,like.value,dislike.value); species.value='', name.value='', age.value='', diet.value='', zooLocation.value='', caretakers.value='', sex.value='', like.value='', dislike.value='';">Add</button>
    </div>
  `
})

export class AddAnimalComponent {
  @Output() addAnimalSender = new EventEmitter();

  // addButtonClicked() {
  //   jquery('.animal-add').show();
  // }

  addAnimal(species: string, name: string, age: number, diet: string, zooLocation: string, caretakers: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, zooLocation, caretakers, sex, like, dislike);
    this.addAnimalSender.emit(newAnimalToAdd);
  }
}
