import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  animation: string = '';
  loginForm: FormGroup;
  message: string = '';

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
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
        if(res.status === 'isLoggedIn') {
          this.router.navigate(['dashboard/home']);
        } else {
          this.message = res.message;
        }
      });
    }
    
    // animasi dibiarkan
    // this.animation = 'exit-slide-out';
    // setTimeout(() => {
    //   this.router.navigate(['dashboard/home']);
    // }, 1000);
  }

  ngOnInit() {
    this.animation = 'welcome-slide-in';
  }
}

