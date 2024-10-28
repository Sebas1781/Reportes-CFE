import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pregunta-si-no',
  templateUrl: './pregunta-si-no.component.html',
  styleUrls: ['./pregunta-si-no.component.css']
})
export class PreguntaSiNoComponent {
  @Input() label: string = '';  // Etiqueta de la pregunta
  @Input() seleccion: boolean | null = null;  // Valor seleccionado: true (Sí) o false (No)
  @Input() name: string = '';   // Nombre único para los radio buttons
  @Output() seleccionChange = new EventEmitter<boolean>();  // Emitir el valor seleccionado

  // Método que emite el valor seleccionado (true para Sí, false para No)
  onSeleccionChange(valor: boolean): void {
    this.seleccion = valor;
    this.seleccionChange.emit(this.seleccion);
  }
}
