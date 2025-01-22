import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sungairengas',
  templateUrl: './sungairengas.component.html',
  styleUrls: ['./sungairengas.component.css']
})
export class SungairengasComponent implements OnInit {

  animation: string = 'sungairengas-component-render';

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('isAnimationEnabled') === 'true') {
      this.animation = 'sungairengas-component-render';
    } else {
      this.animation = '';
    }
  }
}
