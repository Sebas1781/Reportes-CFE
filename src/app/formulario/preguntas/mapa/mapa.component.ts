import { Component, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements AfterViewInit {

  @Input() latitud: number | null = null;
  @Input() longitud: number | null = null;
  @Output() coordenadasActualizadas = new EventEmitter<{ lat: number, lng: number }>();

  map: google.maps.Map | undefined;
  infoWindow: google.maps.InfoWindow | undefined;
  marker: google.maps.Marker | undefined;

  async ngAfterViewInit(): Promise<void> {
    await this.initMap();
  }

  async initMap(): Promise<void> {
    const position: google.maps.LatLngLiteral = { lat: 20.1162752, lng: -98.743668 };
    const { Map } = await google.maps.importLibrary("maps") as { Map: typeof google.maps.Map };

    this.map = new Map(document.getElementById("mapa") as HTMLElement, {
      zoom: 11,
      center: position,
      mapId: "DEMOMAPA"
    });

    this.infoWindow = new google.maps.InfoWindow();
    const locationButton = document.createElement("button");
    locationButton.classList.add("custom-map-control-button");
    this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

    locationButton.addEventListener("click", () => {
      this.obtenerUbicacion();
    });

    this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
      const clickedLatLng = event.latLng;
      if (clickedLatLng) {
        this.addMarker(clickedLatLng);
        this.updateCoordinates(clickedLatLng);
      }
    });
  }

  obtenerUbicacion(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        const pos = { lat: position.coords.latitude, lng: position.coords.longitude };
        this.map!.setCenter(pos);
        this.addMarker(new google.maps.LatLng(pos.lat, pos.lng));
        this.updateCoordinates(new google.maps.LatLng(pos.lat, pos.lng));
      }, (error: GeolocationPositionError) => {
        this.handleLocationError(true, this.infoWindow!, this.map!.getCenter()!);
      });
    } else {
      this.handleLocationError(false, this.infoWindow!, this.map!.getCenter()!);
    }
  }

  addMarker(position: google.maps.LatLng): void {
    if (this.marker) {
      this.marker.setMap(null);
    }

    this.marker = new google.maps.Marker({
      position,
      map: this.map,
      title: "Ubicación seleccionada"
    });

    this.marker.addListener('click', (event: google.maps.MapMouseEvent) => {
      event.stop();
    });
  }

  updateCoordinates(position: google.maps.LatLng): void {
    const lat = position.lat();
    const lng = position.lng();
    const latitudInput = document.getElementById('latitud') as HTMLInputElement;
    const longitudInput = document.getElementById('longitud') as HTMLInputElement;
    if (latitudInput && longitudInput) {
      // Usar Number() para asegurar que no haya limitaciones de decimales
      latitudInput.value = Number(lat).toString();
      longitudInput.value = Number(lng).toString();
  }
    this.latitud = lat;
    this.longitud = lng;

    // Emitir evento para notificar al componente padre
    this.coordenadasActualizadas.emit({ lat, lng });
  }

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
