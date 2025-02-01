import { Component, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedHeaderService } from '../../shared.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  animation: string = '';
  isAnimationEnabled: boolean = true;
  owner: any = {};

  constructor(private router: Router, private renderer: Renderer2, private sharedHeaderService: SharedHeaderService, private http: HttpClient) {}

  ngOnInit(): void {
    if (localStorage.getItem('isAnimationEnabled') === 'true') {
      this.isAnimationEnabled = true;
    } else {
      this.isAnimationEnabled = false;
    }
    this.getUserData();
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  childrenActive(path: string): boolean {
    return this.router.url === path;
  }

  toggleTheme() {
    const theme = document.body.getAttribute('data-bs-theme');
    if (theme === 'dark') {
      document.body.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('tablerTheme', 'light');
      window.location.reload();
    } else {
      document.body.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('tablerTheme', 'dark');
      window.location.reload();
    }
  }

  toggleAnimation() {
    const current = localStorage.getItem('isAnimationEnabled');
    const newValue = current === 'true' ? 'false' : 'true';
    localStorage.setItem('isAnimationEnabled', newValue);
    this.isAnimationEnabled = newValue === 'true';
  }

  logout() {
    this.sharedHeaderService.sendAnimation('dashboard-slide-out');
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 1000);
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
