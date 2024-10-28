// src/app/formulario/preguntas/pregunta.interface.ts
export interface Pregunta {
  tipo: 'texto' | 'seleccion' | 'fecha-hora' | 'rango' | 'si-no' | 'imagen' | 'mapa' | 'texto-largo'; // Tipos de pregunta
  texto: string; // Texto de la pregunta
  opciones?: string[]; // Opciones si es una pregunta de selección
}
