import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaTextoLargoComponent } from './pregunta-texto-largo.component';

describe('PreguntaTextoLargoComponent', () => {
  let component: PreguntaTextoLargoComponent;
  let fixture: ComponentFixture<PreguntaTextoLargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntaTextoLargoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaTextoLargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
