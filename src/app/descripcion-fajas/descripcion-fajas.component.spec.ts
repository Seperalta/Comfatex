import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionFajasComponent } from './descripcion-fajas.component';

describe('DescripcionFajasComponent', () => {
  let component: DescripcionFajasComponent;
  let fixture: ComponentFixture<DescripcionFajasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescripcionFajasComponent]
    });
    fixture = TestBed.createComponent(DescripcionFajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
