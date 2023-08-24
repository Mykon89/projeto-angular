import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'https://gym-dev.com/back-end-academia/API';

  constructor(private http: HttpClient) {}

  createUser(
    username: string,
    password: string,
    email: string,
    address: string,
    phone: string,
    user_group: number,
    active: number
  ): Promise<any> {
    const createUserData = {
      user: username,
      password,
      email,
      address,
      phone,
      user_group,
      active,
    };
    const createUserEndpoint = `${this.API_URL}/user/create/`;
    return this.http
      .post(createUserEndpoint, createUserData)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
