import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaRangoComponent } from './pregunta-rango.component';

describe('PreguntaRangoComponent', () => {
  let component: PreguntaRangoComponent;
  let fixture: ComponentFixture<PreguntaRangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntaRangoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaRangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
