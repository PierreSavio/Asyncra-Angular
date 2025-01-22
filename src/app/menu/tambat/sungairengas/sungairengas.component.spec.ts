import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SungairengasComponent } from './sungairengas.component';

describe('SungairengasComponent', () => {
  let component: SungairengasComponent;
  let fixture: ComponentFixture<SungairengasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SungairengasComponent]
    });
    fixture = TestBed.createComponent(SungairengasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
