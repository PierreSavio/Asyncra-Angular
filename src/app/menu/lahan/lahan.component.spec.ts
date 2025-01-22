import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LahanComponent } from './lahan.component';

describe('LahanComponent', () => {
  let component: LahanComponent;
  let fixture: ComponentFixture<LahanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LahanComponent]
    });
    fixture = TestBed.createComponent(LahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
