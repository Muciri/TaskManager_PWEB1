import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksObjectsService } from '../services/tasks-objects-service';
import { Card } from '../card/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected tasksService:TasksObjectsService = inject(TasksObjectsService);

  //separando tasks por status
  protected tasksTodo = this.tasksService.loadtasks().filter( task => task.status === 'todo' );
  protected tasksDoing = this.tasksService.loadtasks().filter( task => task.status === 'doing' );
  protected tasksDone = this.tasksService.loadtasks().filter( task => task.status === 'done' );
}
