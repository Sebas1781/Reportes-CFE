import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaHoraComponent } from './pregunta-hora.component';

describe('PreguntaHoraComponent', () => {
  let component: PreguntaHoraComponent;
  let fixture: ComponentFixture<PreguntaHoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntaHoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
