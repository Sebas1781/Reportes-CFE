import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pregunta-hora',
  templateUrl: './pregunta-hora.component.html',
  styleUrls: ['./pregunta-hora.component.css']
})
export class PreguntaHoraComponent {
  @Input() label: string = 'Hora';  // Etiqueta de la pregunta
  @Input() hora: string = '';  // Hora seleccionada
  @Output() horaChange = new EventEmitter<string>();  // Emitir la hora seleccionada

   // Autocompletar la hora al hacer clic en el input de texto (focus)
   onHoraFocus(): void {
    if (!this.hora) {  // Si la hora está vacía, autocompleta con la hora actual
      const date = new Date();
      const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      this.hora = time;
      this.onHoraChange(this.hora);  // Emitir la hora actualizada
    }
  }

  // Emitir la hora seleccionada cuando cambia
  onHoraChange(event: any): void {
    this.horaChange.emit(event);
  }

  onTimeSet(event: any): void {
    const [hours, minutes] = event.split(':');
    const formattedTime = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
    this.hora = formattedTime; // Actualiza la variable `hora` con el valor formateado
    this.onHoraChange(this.hora); // Emitir la hora actualizada
  }
}


