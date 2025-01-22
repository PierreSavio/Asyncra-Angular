import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerobakComponent } from './gerobak.component';

describe('GerobakComponent', () => {
  let component: GerobakComponent;
  let fixture: ComponentFixture<GerobakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerobakComponent]
    });
    fixture = TestBed.createComponent(GerobakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
