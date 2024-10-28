import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pregunta-imagen',
  templateUrl: './pregunta-imagen.component.html',
  styleUrls: ['./pregunta-imagen.component.css']
})
export class PreguntaImagenComponent {
  @Input() label: string = '';  // Etiqueta para la pregunta
  @Output() imagenSeleccionada = new EventEmitter<File>();  // Emitir la imagen seleccionada al componente padre
  imagenSrc: string | ArrayBuffer | null = '';  // Almacena la ruta de la imagen para vista previa

  // Método que se ejecuta cuando se selecciona una imagen
  onImagenSeleccionada(event: any): void {
    const file = event.target.files[0];  // Obtener el archivo seleccionado
    if (file) {
      this.imagenSeleccionada.emit(file);  // Emitir el archivo al componente padre

      // Leer la imagen para mostrar la vista previa
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagenSrc = reader.result;  // Asignar la imagen para la vista previa
      };
      reader.readAsDataURL(file);  // Leer la imagen seleccionada
    }
  }
}
