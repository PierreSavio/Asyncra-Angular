import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message: string = '';
  private isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) { 
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  private registerUrl = "http://172.25.3.71:1200/users/register";
  private loginUrl = "http://172.25.3.71:1200/users/login";

  private ngrokURL_Login = "https://21e4-182-2-105-241.ngrok-free.app/api-v2.0/login-user";
  private ngrokURL_Register = "https://21e4-182-2-105-241.ngrok-free.app/api-v2.0/register-user";

  login(data: any) {
    return this.http.post<any>(this.loginUrl, data).pipe(
      tap(response => {
        if(response.status === 200){
          localStorage.setItem('token', response.token);
          this.isLoggedIn = true;
          return response;
        } else if(response.status === 401){
          this.message = response.message;
          return response;
        } else {
          this.message = response.message;
          return response;
        }
      })
    );
  }

  loginWithNgrok(data: any) {
    return this.http.post<any>(this.ngrokURL_Login, data).pipe(
      tap(response => {
        if(response) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('setToast', '1');
          this.isLoggedIn = true;
          return response;
        }
      }),
      catchError(({error}) => {
        return error.errors;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  register(data: any) {
    return this.http.post<any>(this.registerUrl, data).pipe(
      tap(response => {
        console.log('Response:', response);
        if (response.status === 201){
          return response;
        } else if (response.status === 409){
          return response;
        } else {
          return response;
        }
      })
    );
  }
}
