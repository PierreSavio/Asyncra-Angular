import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  animation: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  toggleTheme() {
    const theme = document.body.getAttribute('data-bs-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('tablerTheme', newTheme);
    window.location.reload();
  }

  login() {
    this.animation = 'exit-slide-out';
    setTimeout(() => {
      this.router.navigate(['dashboard/home']);
    }, 1000);
  }

  ngOnInit() {
    this.animation = 'welcome-slide-in';
  }
}

