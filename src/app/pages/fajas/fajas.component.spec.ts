import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FajasComponent } from './fajas.component';

describe('FajasComponent', () => {
  let component: FajasComponent;
  let fixture: ComponentFixture<FajasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FajasComponent]
    });
    fixture = TestBed.createComponent(FajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
