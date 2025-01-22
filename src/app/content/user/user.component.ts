import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  animation: string = 'user1-component-render';

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('isAnimationEnabled') === 'true') {
      this.animation = 'user1-component-render';
    } else {
      this.animation = '';
    }
  }
}
