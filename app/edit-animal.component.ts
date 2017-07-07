import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div class="animal-edit">
      <div *ngIf="childSelectedAnimal">
        <h3>Edit details for: <span>{{childSelectedAnimal.species}}</span></h3>
        <input [(ngModel)]="childSelectedAnimal.name" type="text" placeholder="Name">
        <input [(ngModel)]="childSelectedAnimal.age" type="number" placeholder="Age">
        <input [(ngModel)]="childSelectedAnimal.caretakers" type="number" placeholder="Caretakers">
        <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
