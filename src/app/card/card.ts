import { Component, Input } from '@angular/core';

import { Task } from '../types/Task';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.html'
})
export class Card {
  @Input() task: Task | undefined; // aqui tem que colocar o '| Undefided' para não ter erro de compilação quando o APP ainda não renderizou a task

  //TODO: adicionar métodos para editar e excluir a Task, acioná-los quando apertar os botões
}
