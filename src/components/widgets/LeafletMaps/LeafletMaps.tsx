import { Container } from './LeafletMaps.styled';
import L, { LatLngExpression } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const center: LatLngExpression = [50.08338115501329, 19.925520780400601];
let zoom = 17;
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.9.4/dist/images/';

export const LeafletMaps = () => {
  return (
    <Container id="map">
      <MapContainer zoom={zoom} center={center} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>Drewutnia</Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};
