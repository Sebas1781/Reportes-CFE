import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormularioComponent } from './formulario/formulario.component';
import { PreguntaFechaHoraComponent } from './formulario/preguntas/pregunta-fecha-hora/pregunta-fecha-hora.component';
import { MapaComponent } from './formulario/preguntas/mapa/mapa.component';
import { PreguntaTextoComponent } from './formulario/preguntas/pregunta-texto/pregunta-texto.component';
import { PreguntaRangoComponent } from './formulario/preguntas/pregunta-rango/pregunta-rango.component';
import { PreguntaSeleccionComponent } from './formulario/preguntas/pregunta-seleccion/pregunta-seleccion.component';
import { PreguntaSiNoComponent } from './formulario/preguntas/pregunta-si-no/pregunta-si-no.component';
import { PreguntaImagenComponent } from './formulario/preguntas/pregunta-imagen/pregunta-imagen.component';
import { PreguntaTextoLargoComponent } from './formulario/preguntas/pregunta-texto-largo/pregunta-texto-largo.component';
import { PreguntasComponent } from './formulario/preguntas/preguntas.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PreguntaFechaHoraComponent,
    MapaComponent,
    PreguntaTextoComponent,
    PreguntaRangoComponent,
    PreguntaSeleccionComponent,
    PreguntaSiNoComponent,
    PreguntaImagenComponent,
    PreguntaTextoLargoComponent,
    PreguntasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
