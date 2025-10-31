import { Component, computed, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksObjectsService } from '../services/tasks-objects-service';
import { Card } from '../card/card';
import { Task } from '../types/Task';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private tasksSvc = inject(TasksObjectsService);

  // torne públicos para o template
  tasksSig = this.tasksSvc.tasksSignal(); 

  tasksTodo  = computed(() => this.tasksSig().filter(t => t.status === 'todo'));
  tasksDoing = computed(() => this.tasksSig().filter(t => t.status === 'doing'));
  tasksDone  = computed(() => this.tasksSig().filter(t => t.status === 'done'));

  trackById = (_: number, t: Task) => t.id;

  @Output() editTask = new EventEmitter<Task>();
  @Output() removeTask = new EventEmitter<string>();

  onEdit(_task: Task) {
    this.editTask.emit(_task);
  }

  onRemove(_id: string) {
    this.removeTask.emit(_id);
  }
}
