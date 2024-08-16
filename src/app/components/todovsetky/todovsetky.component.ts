import { Component } from '@angular/core';
import { TodoSablona } from '../../models/TodoSablona';
import { TODOSSKUSOBNE } from '../../mock-data';
//import pre  moznost pouzivania cyklov 
import { CommonModule } from '@angular/common';
import { TodojednotlivoComponent } from '../todojednotlivo/todojednotlivo.component';
 

@Component({
  selector: 'app-todovsetky',
  standalone: true,
  imports: [CommonModule , TodojednotlivoComponent],
  templateUrl: './todovsetky.component.html',
  styleUrl: './todovsetky.component.css'
})
export class TodovsetkyComponent {
  todoVsetky: TodoSablona[] = TODOSSKUSOBNE;

}
