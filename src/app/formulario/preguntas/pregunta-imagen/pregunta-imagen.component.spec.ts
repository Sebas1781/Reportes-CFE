import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaImagenComponent } from './pregunta-imagen.component';

describe('PreguntaImagenComponent', () => {
  let component: PreguntaImagenComponent;
  let fixture: ComponentFixture<PreguntaImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntaImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
