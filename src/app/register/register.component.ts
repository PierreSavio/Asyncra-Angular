import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string = '';
  animation: string = '';
  registerForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      nama_lengkap: ['', Validators.required],
      nik: ['', Validators.required],
      email: ['', Validators.required],
      no_telp: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.animation = 'welcome-slide-in';
  }

  toggleTheme() {
    const theme = document.body.getAttribute('data-bs-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('tablerTheme', newTheme);
    window.location.reload();
  }

  register() {
    if(this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe((res: any) => {
        if(res.status === 201){
          this.router.navigate(['/login']);
        } else if (res.status === 409){
          this.message = res.message;
        } else {
          this.message = res.message;
        }
      });
    }
  }
}
