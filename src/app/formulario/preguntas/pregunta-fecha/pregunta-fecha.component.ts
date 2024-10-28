import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pregunta-fecha',
  templateUrl: './pregunta-fecha.component.html',
  styleUrls: ['./pregunta-fecha.component.css']
})
export class PreguntaFechaComponent {
  @Input() label: string = '';  // Etiqueta de la pregunta
  @Input() fecha: Date | null = null;  // Fecha seleccionada
  @Output() fechaChange = new EventEmitter<Date | null>();  // Para emitir la fecha al componente padre

  // Emitir la fecha seleccionada cuando cambia
  onFechaChange(fechaSeleccionada: Date | null) {
    this.fechaChange.emit(fechaSeleccionada);  // Emitir el valor al componente padre
  }
}

