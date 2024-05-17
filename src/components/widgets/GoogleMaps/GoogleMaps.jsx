import React from 'react';
import styled from '@emotion/styled';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const MapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const containerStyle = {
  width: `${document.documentElement.scrollWidth * 0.55}px`,
  height: `${document.documentElement.scrollWidth * 0.55}px`,
};

const center = {
  lat: 50.08338115501329,
  lng: 19.925720780400592,
};

export const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <MapContainer>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        map={map}
      >
        <p>test</p>
      </GoogleMap>
    </MapContainer>
  ) : (
    <p>Loading...</p>
  );
};
