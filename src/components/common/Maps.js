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
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosicion({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const addMarker = (e) => {
    const newPlace = {
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng(),
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
      <Marker position={{ lat: posicion.latitude, lng: posicion.longitude }} />
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Maps));
