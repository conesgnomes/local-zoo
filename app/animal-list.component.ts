import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div class="animal-list-group">
      <div class="animal-filter">
        <select (change)="onChange($event.target.value)">
          <option value="allAnimals" selected="selected">All Animals</option>
          <option value="youngerAnimals">Young Animals</option>
          <option value="olderAnimals">Mature Animals</option>
        </select>
      </div>
      <div *ngFor="let currentAnimal of childAnimalList | ageFilter:filterByAge" class="animal-card">
        <p><span class="input-header">Species:</span> <span class="input-data">{{currentAnimal.species}}</span></p>
        <p><span class="input-header">Name:</span> <span class="input-data">{{currentAnimal.name}}</span></p>
        <p><span class="input-header">Age:</span> <span class="input-data">{{currentAnimal.age}}</span></p>
        <p><span class="input-header">Diet:</span> <span class="input-data">{{currentAnimal.diet}}</span></p>
        <p><span class="input-header">Location:</span> <span class="input-data">{{currentAnimal.zooLocation}}</span></p>
        <p><span class="input-header">Caretakers:</span> <span class="input-data">{{currentAnimal.caretakers}}</span></p>
        <p><span class="input-header">Sex:</span> <span class="input-data">{{currentAnimal.sex}}</span></p>
        <p><span class="input-header">Likes:</span> <span class="input-data">{{currentAnimal.like}}</span></p>
        <p><span class="input-header">Dislikes:</span> <span class="input-data">{{currentAnimal.dislike}}</span></p>
        <button (click)="editAnimal(currentAnimal)">Edit</button>
      </div>
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
