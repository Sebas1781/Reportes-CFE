import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {

  map: google.maps.Map | undefined;
  infoWindow: google.maps.InfoWindow | undefined;
  marker: google.maps.Marker | undefined;

  // Inicializa el mapa después de cargar la vista
  async ngAfterViewInit(): Promise<void> {
    await this.initMap();
  }

  // Inicializar el mapa
  async initMap(): Promise<void> {
    const position: google.maps.LatLngLiteral = { lat: 20.1162752, lng: -98.743668 }; // Posición inicial

    // Cargar la librería de Google Maps
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps") as { Map: typeof google.maps.Map };

    this.map = new Map(document.getElementById("mapa") as HTMLElement, {
      zoom: 11,
      center: position,
      mapId: "DEMOMAPA" // Cambia este ID por el que necesites
    });

    // Crear la instancia de InfoWindow aquí, sin importarla como biblioteca
    this.infoWindow = new google.maps.InfoWindow();

    // Botón para centrar el mapa en la ubicación actual
    const locationButton = document.createElement("button");
    locationButton.classList.add("custom-map-control-button");

    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

    locationButton.addEventListener("click", () => {
      this.obtenerUbicacion();
    });

    // Evento para agregar un marcador donde el usuario hace clic
    this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
      const clickedLatLng = event.latLng;

      if (clickedLatLng) {
        this.addMarker(clickedLatLng);  // Agregar marcador en la ubicación clicada
        this.showCoordinates(clickedLatLng);  // Mostrar coordenadas
      }
    });
  }

  // Función para obtener la ubicación actual del usuario
  obtenerUbicacion(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        this.map!.setCenter(pos);

        // Agrega un marcador en la ubicación actual
        this.addMarker(new google.maps.LatLng(pos.lat, pos.lng));
        this.showCoordinates(new google.maps.LatLng(pos.lat, pos.lng));
      }, (error: GeolocationPositionError) => {
        this.handleLocationError(true, this.infoWindow!, this.map!.getCenter()!);
      });
    } else {
      // El navegador no soporta Geolocalización
      this.handleLocationError(false, this.infoWindow!, this.map!.getCenter()!);
    }
  }

  // Función para agregar un marcador en la posición seleccionada
  addMarker(position: google.maps.LatLng): void {
    if (this.marker) {
      this.marker.setMap(null); // Elimina el marcador anterior si ya existe
    }

    this.marker = new google.maps.Marker({
      position,
      map: this.map,
      title: "Ubicación seleccionada"
    });

    // Deshabilitar el evento de clic predeterminado que podría redirigir a Google Maps
    this.marker.addListener('click', (event: google.maps.MapMouseEvent) => {
      event.stop(); // Evitar el comportamiento predeterminado de redirección
    });
  }

  // Función para mostrar las coordenadas en el elemento con id 'info'
  showCoordinates(position: google.maps.LatLng): void {
    const lat = position.lat(); // Obtiene la latitud
    const lng = position.lng(); // Obtiene la longitud

    const latitudInput = document.getElementById('latitud') as HTMLInputElement;
    const longitudInput = document.getElementById('longitud') as HTMLInputElement;

    if (latitudInput && longitudInput) {
        // Usar Number() para asegurar que no haya limitaciones de decimales
        latitudInput.value = Number(lat).toString();
        longitudInput.value = Number(lng).toString();
    }
}

  // Manejo de errores de localización
  handleLocationError(browserHasGeolocation: boolean, infoWindow: google.maps.InfoWindow, pos: google.maps.LatLng) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: El servicio de geolocalización falló."
        : "Error: Tu navegador no soporta geolocalización."
    );
    infoWindow.open(this.map!);
  }
}
