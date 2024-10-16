import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaSiNoComponent } from './pregunta-si-no.component';

describe('PreguntaSiNoComponent', () => {
  let component: PreguntaSiNoComponent;
  let fixture: ComponentFixture<PreguntaSiNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreguntaSiNoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaSiNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
