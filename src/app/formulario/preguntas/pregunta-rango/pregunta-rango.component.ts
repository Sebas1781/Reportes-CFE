import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta-rango',
  templateUrl: './pregunta-rango.component.html',
  styleUrls: ['./pregunta-rango.component.css']
})
export class PreguntaRangoComponent implements OnInit {
  @Input() label: string = '';  // El texto de la pregunta
  @Input() respuesta: string = '';  // La respuesta vinculada al modelo
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() value: number = 50;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = Number(inputElement.value);
    this.valueChange.emit(this.value);
  }
}
