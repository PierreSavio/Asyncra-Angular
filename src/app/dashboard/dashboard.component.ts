import { Component, OnInit } from '@angular/core';
import { SharedHeaderService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  animation: string = '';

  constructor(private sharedHeaderService: SharedHeaderService, private router: Router) {}

  ngOnInit() {
    this.sharedHeaderService.currentAction.subscribe((action) => {
      if (action) {
        this.animation = action;
        this.startAnimation();
      }
    });
  }

  startAnimation() {
    this.animation = 'dashboard-slide-out';
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  }
}
