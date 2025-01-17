import { Component } from '@angular/core';
import { Header } from './Header/header.component';
import { UsersComponent } from './users/users.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header,UsersComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
