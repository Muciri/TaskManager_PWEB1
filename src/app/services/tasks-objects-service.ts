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
    return this.TasksSignal;
  }

  //TODO: métodos a mais para as tasks, EX: adicionarTask, removerTask, etc.
}
