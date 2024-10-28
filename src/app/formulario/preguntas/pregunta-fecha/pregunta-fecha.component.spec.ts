import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaFechaComponent } from './pregunta-fecha.component';

describe('PreguntaFechaComponent', () => {
  let component: PreguntaFechaComponent;
  let fixture: ComponentFixture<PreguntaFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntaFechaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
