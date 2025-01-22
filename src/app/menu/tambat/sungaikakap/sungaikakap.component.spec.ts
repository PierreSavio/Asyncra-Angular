import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SungaikakapComponent } from './sungaikakap.component';

describe('SungaikakapComponent', () => {
  let component: SungaikakapComponent;
  let fixture: ComponentFixture<SungaikakapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SungaikakapComponent]
    });
    fixture = TestBed.createComponent(SungaikakapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
