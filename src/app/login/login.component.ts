import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedHeaderService } from '../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  animation: string = '';
  loginForm: FormGroup;
  message: string = '';
  value: any;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private sharedHeaderService: SharedHeaderService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required], // formControlName="email" liveserver ngrok || formControlName="username" liveserver local
      password: ['', Validators.required]
    });
  }

  toggleTheme() {
    const theme = document.body.getAttribute('data-bs-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('tablerTheme', newTheme);
    window.location.reload();
  }

  login() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        console.log(res);
        if(res.resMsg === 'loginSuccess') {
          this.router.navigate(['dashboard/home']);
        } else {
          this.message = res.message;
        }
      });
    }
  }

  loginWithNgrok() {
    this.authService.loginWithNgrok(this.loginForm.value).subscribe((res: any) => {
      if(res.status === true) {
        this.animation = 'exit-slide-out';
        this.sharedHeaderService.sendMessage(res.message);
        setTimeout(() => {
          this.router.navigate(['dashboard/home']);
        }, 1000);
      } else {
        this.message = res.message;
        console.log(res);
      }
    });
    
  }

  ngOnInit() {
    if(localStorage.getItem('token') !== null) {
      this.router.navigate(['dashboard/home']);
    }
    this
  }
}

