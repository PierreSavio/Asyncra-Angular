import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrikComponent } from './listrik.component';

describe('ListrikComponent', () => {
  let component: ListrikComponent;
  let fixture: ComponentFixture<ListrikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListrikComponent]
    });
    fixture = TestBed.createComponent(ListrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
