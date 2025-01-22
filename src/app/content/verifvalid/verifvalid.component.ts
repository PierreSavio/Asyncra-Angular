import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verifvalid',
  templateUrl: './verifvalid.component.html',
  styleUrls: ['./verifvalid.component.css']
})
export class VerifvalidComponent implements OnInit {
  animation: string = 'verifvalid1-component-render';

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('isAnimationEnabled') === 'true') {
      this.animation = 'verifvalid1-component-render';
    } else {
      this.animation = '';
    }
  }
}
