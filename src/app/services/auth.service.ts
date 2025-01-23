import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message: string = '';
  constructor(private http: HttpClient, private router: Router) { }
  private registerUrl = "http://dev.sipelikan.go.id/users/register";
  private loginUrl = "http://dev.sipelikan.go.id/users/login";
  private isLoggedIn = false;

  login(data: any) {
    return this.http.post<any>(this.loginUrl, data).pipe(
      tap(response => {
        if(response.status === 200){
          localStorage.setItem('token', response.token);
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
