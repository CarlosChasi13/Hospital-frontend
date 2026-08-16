import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalModule } from './modules/global/global-module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    GlobalModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Hospital-frontend');
}
