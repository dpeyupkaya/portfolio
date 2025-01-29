import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Marker ikonu için gerekli ayarlar
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapComponent() {
  const position = [41.0082, 28.9784]; 

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '300px', width: '300px', borderRadius: '15px' }}
    >
    
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker */}
      <Marker position={position} icon={icon}>
        <Popup>
          İstanbul, Türkiye
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;