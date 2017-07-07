import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'add-animal',
  template: `
    <button (click)="add = 'newAnimal'">New Animal</button>
    <div *ngIf="add === 'newAnimal'" class="animal-add">
      <input #species type="text" placeholder="Species"><br>
      <input #name type="text" placeholder="Name"><br>
      <input #age type="number" placeholder="Age"><br>
      <input #diet type="text" placeholder="Diet"><br>
      <input #zooLocation type="text" placeholder="Location in Zoo"><br>
      <input #caretakers type="number" placeholder="# of Caretakers"><br>
      <input #sex type="text" placeholder="Sex"><br>
      <input #like type="text" placeholder="Like"><br>
      <input #dislike type="text" placeholder="Dislike"><br>
      <button (click)="addAnimal(species.value,name.value,age.value,diet.value,zooLocation.value,caretakers.value,sex.value,like.value,dislike.value); species.value=''; name.value=''; age.value=''; diet.value=''; zooLocation.value=''; caretakers.value=''; sex.value=''; like.value=''; dislike.value=''; add = 'null';">Add</button>
    </div>
  `
})

export class AddAnimalComponent {
  @Output() addAnimalSender = new EventEmitter();

  add: string = null;

  addAnimal(species: string, name: string, age: number, diet: string, zooLocation: string, caretakers: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, zooLocation, caretakers, sex, like, dislike);
    this.addAnimalSender.emit(newAnimalToAdd);
  }
}
