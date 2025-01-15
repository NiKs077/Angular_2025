import { Component } from '@angular/core';
import { Header } from './Header/header.component';

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
}
