import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AddAnimalComponent } from './add-animal.component';
import { AnimalListComponent } from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { AgeSortPipe } from './age-sort.pipe';

@NgModule({
  imports: [ BrowserModule,
            FormsModule],
  declarations: [ AppComponent,
                AddAnimalComponent,
                AnimalListComponent,
                EditAnimalComponent,
                AgeSortPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
