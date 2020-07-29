import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";

function Maps(props) {
  const { ubicar, zoom, center } = props;
  const [posicion, setPosicion] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosicion({
        latitude: parseFloat(position.coords.latitude),
        longitude: parseFloat(position.coords.longitude),
      });
    });
  }, []);

  const addMarker = (e) => {
    const newPlace = {
      latitude: parseFloat(e.latLng.lat()),
      longitude: parseFloat(e.latLng.lng()),
    };
    setPosicion(newPlace);
    ubicar(newPlace.latitude, newPlace.longitude);
  };

  return (
    <GoogleMap
      onClick={(e) => {
        addMarker(e);
      }}
      defaultZoom={zoom}
      defaultCenter={center}
    >
      <Marker
        position={{
          lat: parseFloat(posicion.latitude),
          lng: parseFloat(posicion.longitude),
        }}
      />
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Maps));
