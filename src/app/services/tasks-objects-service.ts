import { Injectable, signal, Signal} from '@angular/core';

import { Task, uid, addDaysISO} from '../types/Task';

@Injectable({
  providedIn: 'root'
})
export class TasksObjectsService {
  private TasksSignal = signal<Array<Task>>([
    { 
      id: uid(), 
      title: 'Ler capítulo 3 de Algoritmos', 
      due: addDaysISO(2), 
      level: 'high', 
      desc: 'Priorizar exercícios 3.1-3.5', 
      status: 'todo' 
    },
  
    { 
      id: uid(), 
      title: 'começar projeto Typescript', 
      due: addDaysISO(2), 
      level: 'high', 
      desc: 'utilizar Angular', 
      status: 'todo' 
    },

    { 
      id: uid(), 
      title: 'Resolver lista de TS', 
      due: addDaysISO(5), 
      level: 'medium', 
      desc: 'Atenção a generics', 
      status: 'doing' 
    },

    { 
      id: uid(), 
      title: 'Revisão rápida: HTML/CSS', 
      due: addDaysISO(10), 
      level: 'low', 
      desc: '30 minutos', 
      status: 'done' 
    }]);
  constructor() { };

  loadtasks() {
    return this.TasksSignal();
  }

  add(task: Omit<Task, 'id'>) {
    this.TasksSignal.update(tasks => [{ id: uid(), ...task }, ...tasks]);
  }

  remove(id: string) {
    this.TasksSignal.update(tasks => tasks.filter(t => t.id !== id));
  }

  edit(id: string, data: Partial<Task>) {
    this.TasksSignal.update(tasks =>
      tasks.map(t => (t.id === id ? { ...t, ...data } : t))
    );
  }

  tasksSignal() {
    return this.TasksSignal;
  }
}
