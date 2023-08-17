import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'login';

  get username(): string {
    return localStorage.getItem('username') || ''; // Obter o nome do usuário do localStorage
  }
}
