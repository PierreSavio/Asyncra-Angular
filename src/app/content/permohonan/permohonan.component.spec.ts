import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermohonanComponent } from './permohonan.component';

describe('PermohonanComponent', () => {
  let component: PermohonanComponent;
  let fixture: ComponentFixture<PermohonanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermohonanComponent]
    });
    fixture = TestBed.createComponent(PermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
