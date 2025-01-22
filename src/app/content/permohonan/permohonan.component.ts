import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permohonan',
  templateUrl: './permohonan.component.html',
  styleUrls: ['./permohonan.component.css']
})
export class PermohonanComponent implements OnInit {

  animation: string = 'permohonan1-component-render';

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('isAnimationEnabled') === 'true') {
      this.animation = 'permohonan1-component-render';
    } else {
      this.animation = '';
    }
  }
}

