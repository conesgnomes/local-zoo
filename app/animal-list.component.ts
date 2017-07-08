import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="animal-filter">
      <select (change)="onChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="youngerAnimals">Young Animals</option>
        <option value="olderAnimals">Mature Animals</option>
      </select>
    </div>
    <div *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge" class="animal-card">
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

  filterByAge: string = "allAnimals";

  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

}
