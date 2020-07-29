import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import ModalLocal from "./ModalLocal";

const db = firebase.firestore(firebaseApp);

export default function NegocioDetalleLocal(props) {
  const { id } = props;
  const [locales, setLocales] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    db.collection("negocios")
      .doc(id)
      .collection("locales")
      .get()
      .then((response) => {
        const localesArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          localesArray.push(data);
        });
        setLocales(localesArray);
      })
      .catch((err) => {
        console.log(err);
      });
    setReload(false);
  }, [id, reload]);

  const deleteOnClick = (idLocal, nombre) => {
    Swal.fire({
      title: "¿Está seguro que desea eliminar " + nombre + "?",
      text: "Esta acción no puede deshacerse",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.value) {
        db.collection("negocios")
          .doc(id)
          .collection("locales")
          .doc(idLocal)
          .delete()
          .then(() => {
            Swal.fire(
              "Negocio Eliminada",
              nombre + " ha sido eliminado",
              "success"
            );
            setReload(true);
          })
          .catch((err) => {
            Swal.fire("Algo salió mal", "Erro: " + err, "error");
          });
      } else {
        Swal.fire(
          "Cancelado",
          "El local: " + nombre + " no se ha eliminado",
          "error"
        );
      }
    });
  };

  return (
    <div>
      {locales.length === 0 ? (
        <div>
          <p>No se encontraron locales registrados para este Negocio</p>
        </div>
      ) : (
        <div>
          {locales.map((loc) => {
            return (
              <div key={loc.id}>
                <div className="container">
                  <p className="col-5 floatLeft">{loc.nombre}</p>
                  <p className="col-6 floatLeft">{loc.direccion}</p>
                  <p className="col-1 floatLeft">
                    <button
                      className="menuList"
                      onClick={() => {
                        deleteOnClick(loc.id, loc.nombre);
                      }}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </p>
                </div>
                <div className="clearfix"></div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
      <button
        className="btn btn-success"
        data-toggle="modal"
        data-target="#agregarLocal"
      >
        +
      </button>
      {/* Modal Local*/}
      <ModalLocal id={id} setReload={setReload} />
    </div>
  );
}
