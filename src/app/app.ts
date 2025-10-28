import { Component, inject, signal } from '@angular/core';

import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Dashboard],
  templateUrl: './app.html',
})
export class App {
  //TODO: fazer funcionar o modal e suas atribuições.
}