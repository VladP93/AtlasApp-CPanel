import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Moment from "react-moment";
import "moment/locale/es";

import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function NegocioList(props) {
  const { negocios } = props;
  const [redirecting, setRedirecting] = useState(false);

  const deleteOnClick = (id, nombre) => {
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
          .delete()
          .then(() => {
            let timerInterval;
            Swal.fire({
              title: "Negocio Eliminada",
              html: nombre + " ha sido eliminado",
              timer: 1000,
              showCloseButton: false,
              onClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              setRedirecting(true);
            });
          })
          .catch((err) => {
            Swal.fire("Algo salió mal", "Erro: " + err, "error");
          });

        firebase
          .storage()
          .ref()
          .child(`negocios/${id}`)
          .delete()
          .then(() => {
            //Ni idea de que poner cuando se borre la imagen xDDD
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Swal.fire(
          "Cancelado",
          "El negocio: " + nombre + " no se ha eliminado",
          "error"
        );
      }
    });
  };

  if (redirecting) {
    window.location.reload();
  }

  return (
    <div>
      <br />
      <br />
      {negocios.map((neg) => {
        return (
          <div key={neg.id}>
            <div className="container">
              <p className="col-3 floatLeft">{neg.nombre}</p>
              <p className="col-3 floatLeft">{neg.categoria}</p>
              <p className="col-3 floatLeft">
                <Moment format="DD/MM/YYYY">
                  {new Date(neg.createAt.seconds * 1000)}
                </Moment>
              </p>
              <p className="col-1 floatLeft">
                <Link to={"/negocios/detalle/" + neg.id} className="menuList">
                  <i className="fas fa-store"></i>
                </Link>
              </p>
              <p className="col-1 floatLeft">
                <Link to={"/negocios/editar/" + neg.id} className="menuList">
                  <i className="far fa-edit menuList"></i>
                </Link>
              </p>
              <p className="col-1 floatLeft">
                <button
                  className="menuList"
                  onClick={() => {
                    deleteOnClick(neg.id, neg.nombre);
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
  );
}
