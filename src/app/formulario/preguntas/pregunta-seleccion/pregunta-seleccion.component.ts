import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-pregunta-seleccion',
  templateUrl: './pregunta-seleccion.component.html',
  styleUrls: ['./pregunta-seleccion.component.css']
})
export class PreguntaSeleccionComponent {
  @Input() label: string = '';
  @Input() opciones: string[] = [];
  @Input() seleccion: string = '';
  @Output() seleccionChange = new EventEmitter<string>();

  showDropdown = false;

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  seleccionarOpcion(opcion: string): void {
    this.seleccion = opcion;
    this.seleccionChange.emit(this.seleccion);
    this.showDropdown = false;
  }

  onInputChange(event: any): void {
    const inputValue = event.target.value;
    this.seleccion = inputValue;
    this.seleccionChange.emit(this.seleccion);
  }

}
