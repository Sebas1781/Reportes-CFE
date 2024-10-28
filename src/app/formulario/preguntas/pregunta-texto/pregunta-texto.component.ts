import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pregunta-texto',
  templateUrl: './pregunta-texto.component.html',
  styleUrls: ['./pregunta-texto.component.css']
})
export class PreguntaTextoComponent {
  @Input() label: string = '';  // El texto de la pregunta
  @Input() respuesta: string = '';  // La respuesta vinculada al modelo
  @Input() required: boolean = false;  // Define si el campo es requerido
  @Input() minlength: number = 0;  // Mínimo de caracteres
  @Input() soloNumeros: boolean = false;
  @Input() unit: string = ''; // Si solo se permiten números
  @Output() respuestaChange = new EventEmitter<string>();  // Para emitir la respuesta al componente padre


  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const valueWithoutUnit = inputElement.value.replace(this.unit, '').trim();
    inputElement.value = valueWithoutUnit;
    this.respuesta = inputElement.value;
    this.onRespuestaChange(this.respuesta);
  }

  // Emitir el valor actualizado de la respuesta
  onRespuestaChange(value: string) {
    this.respuestaChange.emit(value);  // Emitir el valor al componente padre
  }

  // Método para verificar si solo se permiten números y bloquear otros caracteres
  verificarSoloNumeros(event: KeyboardEvent) {
    const teclaPresionada = event.key;
    const soloNumerosRegex = /^[0-9\-\.]+$/;

    // Permitir solo números, y bloquear cualquier otro carácter si soloNumeros es true
    if (this.soloNumeros && !soloNumerosRegex.test(teclaPresionada) && teclaPresionada !== 'Backspace') {
      event.preventDefault();  // Evitar que caracteres no numéricos se ingresen
    }
  }
}
