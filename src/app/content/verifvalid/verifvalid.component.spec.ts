import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifvalidComponent } from './verifvalid.component';

describe('VerifvalidComponent', () => {
  let component: VerifvalidComponent;
  let fixture: ComponentFixture<VerifvalidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifvalidComponent]
    });
    fixture = TestBed.createComponent(VerifvalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
