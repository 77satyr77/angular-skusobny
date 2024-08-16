import { Component, Input } from '@angular/core';
import { TodoSablona } from '../../models/TodoSablona';

@Component({
  selector: 'app-todojednotlivo',
  standalone: true,
  imports: [],
  templateUrl: './todojednotlivo.component.html',
  styleUrl: './todojednotlivo.component.css'
})
export class TodojednotlivoComponent {

  @Input() todoZinputu!: TodoSablona;

}
