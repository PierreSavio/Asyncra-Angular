import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  animation: string = 'user1-component-render';
  users: any = {};
  loading: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem('isAnimationEnabled') === 'true') {
      this.animation = 'user1-component-render';
    } else {
      this.animation = '';
    }
    this.getUsers();
  }

  getUsers() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get('https://api.hkprox.xyz/admin/api-v2.0/get-users', { headers }).subscribe((response: any) => {
      this.users = response.users;
      this.loading = false;
    });
  }
}
