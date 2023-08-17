import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'https://gym-dev.com/back-end-academia/API'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Promise<any> {
    const loginData = { user: username, password };

    const loginEndpoint = `${this.API_URL}/login.php`;
    return this.http
      .post(loginEndpoint, loginData)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  getUsers(user: string, email: string, status: number): Promise<any> {
    const formData = { user: user, email: email, status: status }; // Criar objeto com os dados de login
    const endPoint = `${this.API_URL}/user/get-users.php`;
    return this.http
      .post(endPoint, formData)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
