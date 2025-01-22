import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  animation1: string = 'home1-component-render';
  animation2: string = 'home2-component-render';
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('isAnimationEnabled') === 'true') {
      this.animation1 = 'home1-component-render';
      this.animation2 = 'home2-component-render';
    } else {
      this.animation1 = '';
      this.animation2 = '';
    }
  }

}
