import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dashboard } from './dashboard/dashboard';
import { TasksObjectsService } from './services/tasks-objects-service';
import { Task } from './types/Task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, Dashboard],
  templateUrl: './app.html',
})
export class App {
  private tasksSvc = inject(TasksObjectsService);

  // estado do modal
  showModal = false;
  editingTaskId: string | null = null;

  // campos do formulário (template-driven)
  title = '';
  due = '';
  level: Task['level'] = 'low';
  desc = '';
  status: Task['status'] = 'todo';

  open()  { this.showModal = true; }
  close() { this.showModal = false; this.resetForm(); }

   save() {
    if (!this.title || !this.due) return;

    const data = {
      title: this.title.trim(),
      due: this.due,
      level: this.level,
      desc: (this.desc || '').trim(),
      status: this.status,
    };

    if (this.editingTaskId) {
      // Editando tarefa existente
      this.tasksSvc.edit(this.editingTaskId, data);
    } else {
      // Criando nova
      this.tasksSvc.add(data);
    }

    this.close();
  }

  /** Recebe evento de edição vindo do Dashboard */
 onEditTask(payload: unknown) {
  const task = payload as Task; // confere se precisar
  this.editingTaskId = task.id;
  this.title = task.title;
  this.due = task.due;
  this.level = task.level;
  this.desc = task.desc;
  this.status = task.status;
  this.showModal = true;
}

onRemoveTask(payload: unknown) {
  const id = payload as string;
  this.tasksSvc.remove(id);
}

  private resetForm() {
    this.editingTaskId = null;
    this.title = '';
    this.due = '';
    this.level = 'low';
    this.desc = '';
    this.status = 'todo';
  }
}