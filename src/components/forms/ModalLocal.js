import React, { useState, useEffect } from "react";
import Maps from "../common/Maps";
import Swal from "sweetalert2";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function ModalLocal(props) {
  const { id, setReload } = props;
  const [position, setPosition] = useState({ latitude: "", longitude: "" });
  const [nuevoLocal, setNuevoLocal] = useState({
    nombre: "",
    direccion: "",
    location: {
      latitude: "",
      longitude: "",
      latitudeDelta: "",
      longitudeDelta: "",
    },
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const ubicar = (lat, long) => {
    setPosition({ latitude: lat, longitude: long });
    setNuevoLocal({
      ...nuevoLocal,
      location: { latitude: lat, longitude: long },
    });
  };

  const onChangeLocal = (e, type) => {
    setNuevoLocal({ ...nuevoLocal, [type]: e.target.value });
  };
  const agregarLocal = () => {
    if (
      nuevoLocal.location.latitude === "" ||
      nuevoLocal.location.longitude === ""
    ) {
      Swal.fire("Error", "Seleccione una ubicación en el mapa", "error");
    } else {
      db.collection("negocios")
        .doc(id)
        .collection("locales")
        .add(nuevoLocal)
        .then(() => {
          Swal.fire(
            "Local agregado",
            "El local " + nuevoLocal.nombre + " ha sido agregado exitosamente",
            "success"
          );
          setTimeout(2000);
          setReload(true);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire("Error", err, "error");
        });
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="agregarLocal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLocal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLocal">
                Nuevo Local
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Cerrar"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="nombre" className="col-form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    onChange={(e) => {
                      onChangeLocal(e, "nombre");
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="direccion" className="col-form-label">
                    Dirección:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="direccion"
                    onChange={(e) => {
                      onChangeLocal(e, "direccion");
                    }}
                  />
                </div>
                <div className="form-group">
                  <p>Localización:</p>
                  <div>
                    <Maps
                      ubicar={ubicar}
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7d-ZnZqsrJg6gLeIOLHi_lrNOaDGzTb4"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `400px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                      center={{
                        lat: position.latitude,
                        lng: position.longitude,
                      }}
                      zoom={15}
                    />
                  </div>
                  <p>
                    lat: {position.latitude} lng: {position.longitude}
                  </p>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  agregarLocal();
                }}
                data-dismiss="modal"
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}