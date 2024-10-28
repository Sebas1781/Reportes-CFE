import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pregunta-texto-largo',
  templateUrl: './pregunta-texto-largo.component.html',
  styleUrls: ['./pregunta-texto-largo.component.css']
})
export class PreguntaTextoLargoComponent {
  @Input() label: string = '';  // Etiqueta de la pregunta
  @Input() respuesta: string = '';  // Almacena la respuesta del textarea
  @Input() required: boolean = false;  // Si el campo es obligatorio o no
  @Input() minlength: number = 0;  // Longitud mínima
  @Output() respuestaChange = new EventEmitter<string>();  // Emitir la respuesta al componente padre

  // Método para emitir la respuesta cuando cambia el valor en el textarea
  onRespuestaChange(valor: string): void {  // El valor se recibe directamente desde ngModelChange
    this.respuesta = valor;
    this.respuestaChange.emit(this.respuesta);  // Emitir la respuesta al componente padre
  }
}
