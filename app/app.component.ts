import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="header">
      <div class="background">
        <div class="brand-group">
          <img src="../img/elephant.png">
          <h1>Zoocyclopedia</h1>
        </div>
      </div>
    </div>
    <add-animal (addAnimalSender)="addAnimal($event)"></add-animal>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    `
})

export class AppComponent {

  masterAnimalList: Animal[] = [];
  selectedAnimal = null;

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
