import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaFechaHoraComponent } from './pregunta-fecha-hora.component';

describe('PreguntaFechaHoraComponent', () => {
  let component: PreguntaFechaHoraComponent;
  let fixture: ComponentFixture<PreguntaFechaHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntaFechaHoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaFechaHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
