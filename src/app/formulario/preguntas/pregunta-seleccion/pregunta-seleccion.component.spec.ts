import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaSeleccionComponent } from './pregunta-seleccion.component';

describe('PreguntaSeleccionComponent', () => {
  let component: PreguntaSeleccionComponent;
  let fixture: ComponentFixture<PreguntaSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntaSeleccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
