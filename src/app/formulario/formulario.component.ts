import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  // Respuestas del formulario
  respuestas = {
    nombre: '',         // Campo para el nombre
    apellido: '',
    rango: 0 ,
    numero: '',
    fechaEvento: null,
    horaEvento: '' ,
    opcionSeleccionada: '',
    aceptacion: null,   // Aceptación de términos
    imagen: null as File | null,
    aceptacion2: null,
    descripcion: '' ,
    latitud: null as number | null,
    longitud: null as number | null     // Campo para la imagen seleccionada
  };

  constructor(private datePipe: DatePipe) { }

  // Método para manejar la imagen seleccionada desde el componente de imagen
  onImagenSeleccionada(file: File): void {
    this.respuestas.imagen = file;
    console.log('Imagen seleccionada:', this.respuestas.imagen);
    // Aquí puedes manejar la imagen seleccionada (subir al servidor, etc.)
  }

   // Método para manejar las coordenadas del mapa
   onCoordenadasRecibidas(coords: { lat: number, lng: number }): void {
    this.respuestas.latitud = coords.lat;
    this.respuestas.longitud = coords.lng;
    console.log('Coordenadas recibidas:', coords);
  }


  // Método para enviar el formulario
  onSubmit() {
    // Formatear la fecha del evento antes de enviarlo
    const fechaFormateada = this.respuestas.fechaEvento ?
      this.datePipe.transform(this.respuestas.fechaEvento, 'dd/MM/yy') : null;

    const respuestasTexto = {
      ...this.respuestas,
      numero: `${this.respuestas.numero} cm`,
      fechaEvento: fechaFormateada
    };

    console.log('Enviando formulario...', respuestasTexto);
    // Aquí puedes manejar el envío de datos al backend, incluyendo la imagen
  }

  dismissAlert() {
    // Manejar el cierre de alertas si es necesario
  }
}
