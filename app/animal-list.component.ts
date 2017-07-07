import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select>
    <option value="all" selected="selected">All Animals</option>
    <option value="young">Younger than 2</option>
    <option value="old">Older than 2</option>
  </select>
  <div *ngFor="let currentAnimal of animalArray" class="animal-card">
    <p>{{currentAnimal.species}}</p>
    <p>{{currentAnimal.name}}</p>
    <p>{{currentAnimal.age}}</p>
    <p>{{currentAnimal.diet}}</p>
    <p>{{currentAnimal.zooLocation}}</p>
    <p>{{currentAnimal.caretakers}}</p>
    <p>{{currentAnimal.sex}}</p>
    <p>{{currentAnimal.like}}</p>
    <p>{{currentAnimal.dislike}}</p>
    <button (click)="editAnimal(currentAnimal)">Edit</button>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "all";

  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

}
