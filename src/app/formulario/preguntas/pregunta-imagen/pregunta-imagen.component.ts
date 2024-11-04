import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pregunta-imagen',
  templateUrl: './pregunta-imagen.component.html',
  styleUrls: ['./pregunta-imagen.component.css']
})
export class PreguntaImagenComponent {
  @Input() label: string = '';               // Etiqueta para la imagen
  @Input() campo: string = '';               // Identificador para el campo de imagen
  @Output() imagenSeleccionada = new EventEmitter<{ file: File, campo: string }>();  // Emitir imagen con identificador
  imagenSrc: string | ArrayBuffer | null = '';  // Para mostrar la vista previa de la imagen seleccionada

  // Método que se ejecuta cuando se selecciona una imagen
  onImagenSeleccionada(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files ? input.files[0] : null;
    if (file) {
      this.imagenSeleccionada.emit({ file, campo: this.campo });  // Emitir imagen y campo al componente padre

      // Mostrar la vista previa de la imagen seleccionada
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenSrc = reader.result;  // Asignar la imagen para vista previa
      };
      reader.readAsDataURL(file);
    }
  }
}
