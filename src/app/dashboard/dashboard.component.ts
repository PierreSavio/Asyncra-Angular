import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SharedHeaderService } from '../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  animation: string = '';
  animation2: string = '';
  message: string = '';
  constructor(private sharedHeaderService: SharedHeaderService, private router: Router) {}

  ngOnInit() {
    this.sharedHeaderService.currentAction.subscribe((action) => {
      if (action) {
        this.animation = action;
        this.startAnimation();
      }
    });

    this.sharedHeaderService.currentMessage.subscribe((message) => {
      if(message) {
        this.animation2 = 'bounce-in-top';
        this.message = message;
      }
    });
  }

  ngAfterViewInit() {
    this.toastMessage();
  }

  startAnimation() {
    this.animation = 'dashboard-slide-out';
    setTimeout(() => {
      window.location.reload();
    }, 1200);
  }

  toastMessage() {
    var x = document.getElementById("snackbar") as HTMLDivElement;
    if(x) {
      if(localStorage.getItem('setToast') === '1') {
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); localStorage.setItem('setToast', '0'); }, 3000);
      }
    }
  }
}

