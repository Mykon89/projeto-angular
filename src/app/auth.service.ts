import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'https://gym-dev.com/back-end-academia/API';

  isAuthenticated(): boolean {
    const username = localStorage.getItem('username');
    return !!username;
  }

  private inactivityDuration = 30 * 60 * 1000; // 30 minutos em milissegundos
  private inactivityTimeout: any;

  constructor(private http: HttpClient, private router: Router) {
    this.setupInactivityTimer();
  }

  private setupInactivityTimer(): void {
    window.addEventListener('mousemove', () => this.resetInactivityTimer());
    window.addEventListener('keypress', () => this.resetInactivityTimer());

    this.startInactivityTimer();
  }

  private startInactivityTimer(): void {
    this.inactivityTimeout = setTimeout(() => {
      this.logout();
    }, this.inactivityDuration);
  }

  private resetInactivityTimer(): void {
    clearTimeout(this.inactivityTimeout);
    this.startInactivityTimer();
  }

  private stopInactivityTimer(): void {
    clearTimeout(this.inactivityTimeout);
  }

  private logout(): void {
    // Limpar todas as informações de autenticação do localStorage
    localStorage.clear();

    // Redirecionar para a página de login
    this.router.navigate(['/login']);
  }

  login(username: string, password: string): Promise<any> {
    const loginData = { user: username, password };

    const loginEndpoint = `${this.API_URL}/login.php`;
    return this.http
      .post(loginEndpoint, loginData)
      .toPromise()
      .then((response) => {
        // Resetar temporizador de inatividade após login bem-sucedido
        this.resetInactivityTimer();
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  getUsers(user: string, email: string, status: number): Promise<any> {
    const formData = { user: user, email: email, status: status };
    const endPoint = `${this.API_URL}/user/get-users.php`;
    return this.http
      .post(endPoint, formData)
      .toPromise()
      .then((response) => {
        // Resetar temporizador de inatividade após obter usuários
        this.resetInactivityTimer();
        return response as any[];
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
