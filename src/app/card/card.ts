import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../types/Task';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
})
export class Card {
  // Valor padrão evita "possibly undefined" no template
  @Input() task: Task = { id: '', title: '', due: '', level: 'low', desc: '', status: 'todo' };

  // Saídas usadas no template/parent (Dashboard)
  @Output() edit = new EventEmitter<Task>();
  @Output() remove = new EventEmitter<string>();
}
