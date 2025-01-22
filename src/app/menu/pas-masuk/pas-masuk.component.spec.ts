import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasMasukComponent } from './pas-masuk.component';

describe('PasMasukComponent', () => {
  let component: PasMasukComponent;
  let fixture: ComponentFixture<PasMasukComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasMasukComponent]
    });
    fixture = TestBed.createComponent(PasMasukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
