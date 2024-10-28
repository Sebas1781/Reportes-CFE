import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormularioComponent } from './formulario/formulario.component';
import { MapaComponent } from './formulario/preguntas/mapa/mapa.component';
import { PreguntaTextoComponent } from './formulario/preguntas/pregunta-texto/pregunta-texto.component';
import { PreguntaRangoComponent } from './formulario/preguntas/pregunta-rango/pregunta-rango.component';
import { PreguntaSeleccionComponent } from './formulario/preguntas/pregunta-seleccion/pregunta-seleccion.component';
import { PreguntaSiNoComponent } from './formulario/preguntas/pregunta-si-no/pregunta-si-no.component';
import { PreguntaImagenComponent } from './formulario/preguntas/pregunta-imagen/pregunta-imagen.component';
import { PreguntaTextoLargoComponent } from './formulario/preguntas/pregunta-texto-largo/pregunta-texto-largo.component';
import { PreguntasComponent } from './formulario/preguntas/preguntas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PreguntaFechaComponent } from './formulario/preguntas/pregunta-fecha/pregunta-fecha.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NgxMaterialTimepickerDialComponent } from 'ngx-material-timepicker/src/app/material-timepicker/components/timepicker-dial/ngx-material-timepicker-dial.component';
import { PreguntaHoraComponent } from './formulario/preguntas/pregunta-hora/pregunta-hora.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MapaComponent,
    PreguntaTextoComponent,
    PreguntaRangoComponent,
    PreguntaSeleccionComponent,
    PreguntaSiNoComponent,
    PreguntaImagenComponent,
    PreguntaTextoLargoComponent,
    PreguntasComponent,
    PreguntaFechaComponent,
    PreguntaHoraComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
