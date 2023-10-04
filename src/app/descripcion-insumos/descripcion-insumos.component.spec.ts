import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionInsumosComponent } from './descripcion-insumos.component';

describe('DescripcionInsumosComponent', () => {
  let component: DescripcionInsumosComponent;
  let fixture: ComponentFixture<DescripcionInsumosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DescripcionInsumosComponent]
    });
    fixture = TestBed.createComponent(DescripcionInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
