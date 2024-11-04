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

    modelo: '',//
    tipoMantto: '',//
    //informacion basica
    responsable: '', //
    fecha: null,//
    registro: '',//
    licencia: '',//
    horaInicio: '',//
    horaTermnino: '',
    restaurador: '',//
    circuito: '',//
    area: '',//
    direccion: '',//
    latitud: null as number | null,//
    longitud: null as number | null,//

   //informacion del sistema de comunicaciónes
    nsRadioGabinete: '',//
    potenciaSalida: '',//
    rssi: 0 ,//
    umbralRecepcion: 0,//
    frecuencia: '',//
    rx: '',//
    tx: '',//
    cablePigtail: '',//
    supresor: '',//
    cableLT: '',//
    antena: '',//
    alturaAntena: '',//
    repetidorEnlace: '',//
    canalUCM: '',//

      //Mantenimiento de sistema de operaciones

    fotografiaMantto: null,
    medicionRF: null,
    medicionFuenteCD: null,
    medicionBateria : null,
    limpieza: null,
    ajusteTornilleria: null,
    cambioAntena: null,
    impermeabilizacionConectores: null,
    redireccionamientoAntena: null,
    cambioLT: null,
    cambioSupresor: null,
    cambioRadio: null,
    cambioPigtail: null,
    cambioConectores: null,

    //Mediciones

    potenciaRadio: '',
    potenciaIncidente: '',
    potenciaReflejada: '',
    vswr: '',
    voltajeAcometida: '',
    resistenciaTierra: '',
    voltajeFuente:  '',
    voltajeBateria: '',
    resitenciaBateria: '',
    porcentajeBateria: '',
    anguloAzimut: '',

    //intsalacion de equipos

    placaNomeclatura: null,
    selladoGabinete: null,
    protectorAntifauna: null,
    cuchillaByPass: null,
    cuchillaLaterale: null,
    bajanteTierra: null,
    terminalPAT: null,
    apartarrayos: null,
    cableRF: null,
    calibreBajanate: '',
    Observaciones: '',
    configuracionRadio: '',

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
       // Campo para la imagen seleccionada
  };

  imagenes: { [key: string]: File | null } = {
    imagenEstructura: null,
    imagenGabinete: null,
    imagenRadio: null,
    imagenSupresor: null,
    imagenRestaurador: null,
    imagenTerminalTierra: null,
    imagenBajanteTierra: null,
    imagenPlaca: null,
    imagenAdicional: null,
  };

  constructor(private datePipe: DatePipe) { }

  // Método para manejar la imagen seleccionada desde el componente de imagen
  onImagenSeleccionada(event: { file: File, campo: string }): void {
    this.imagenes[event.campo] = event.file;  // Almacena la imagen en el campo correspondiente
  }

   // Método para manejar las coordenadas del mapa
   onCoordenadasRecibidas(coords: { lat: number, lng: number }): void {
    this.respuestas.latitud = coords.lat;
    this.respuestas.longitud = coords.lng;
  }


  // Método para enviar el formulario
  onSubmit() {
    const fechaFormateada = this.respuestas.fecha ?
      this.datePipe.transform(this.respuestas.fecha, 'dd/MM/yy') : null;

    const respuestasTexto = {
      ...this.respuestas,
      numero: `${this.respuestas.numero} cm`,
      fechaEvento: fechaFormateada,
      imagenes: this.imagenes // Incluye todas las imágenes en el envío
    };

    console.log('Enviando formulario...', respuestasTexto);
    // Aquí puedes manejar el envío de datos al backend, incluyendo la imagen
  }

  dismissAlert() {
    // Manejar el cierre de alertas si es necesario
  }
}
