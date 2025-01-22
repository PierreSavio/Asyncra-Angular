import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dokumen',
  templateUrl: './dokumen.component.html',
  styleUrls: ['./dokumen.component.css']
})
export class DokumenComponent implements OnInit {
  animation: string = 'dokumen1-component-render';
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('isAnimationEnabled') === 'true') {
      this.animation = 'dokumen1-component-render';
    } else {
      this.animation = '';
    }
  }
}
