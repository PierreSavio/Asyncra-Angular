import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangunanComponent } from './bangunan.component';

describe('BangunanComponent', () => {
  let component: BangunanComponent;
  let fixture: ComponentFixture<BangunanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BangunanComponent]
    });
    fixture = TestBed.createComponent(BangunanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
