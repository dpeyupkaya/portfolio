import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

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
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />




      <Marker position={position} icon={icon}>
        <Popup>
          HARO BABBA
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;