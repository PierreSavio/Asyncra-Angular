import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sungaikakap',
  templateUrl: './sungaikakap.component.html',
  styleUrls: ['./sungaikakap.component.css']
})
export class SungaikakapComponent implements OnInit {

  animation: string = 'sungaikakap-component-render';

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('isAnimationEnabled') === 'true') {
      this.animation = 'sungaikakap-component-render';
    } else {
      this.animation = '';
    }
  }
}
