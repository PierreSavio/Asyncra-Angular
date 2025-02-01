import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  constructor(private http: HttpClient, private router: Router) { }
  owner: any;

  ngOnInit() {
    this.getUserData();
  }

  getUserData() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.get('https://api.hkprox.xyz/user/api-v2.0/get-user', 
      { headers })
    .subscribe(({user}: any) => {
      this.owner = {
        email: user.email,
        name: user.name,
      };
    });
  }
}
