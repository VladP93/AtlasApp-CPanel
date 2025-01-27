import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function CategoriaList(props) {
  const { categorias, setReload } = props;

  const deleteOnClick = (id, categoria) => {
    Swal.fire({
      title: "¿Está seguro que desea eliminar " + categoria + "?",
      text: "Esta acción no puede deshacerse",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.value) {
        db.collection("categorias")
          .doc(id)
          .delete()
          .then(() => {
            Swal.fire(
              "Categoría Eliminada",
              categoria + " ha sido eliminada",
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
          "La categoría: " + categoria + " no se ha eliminado",
          "error"
        );
      }
    });
  };

  return (
    <div>
      <br />
      <br />
      {categorias.map((cat) => {
        return (
          <div key={cat.id}>
            <div className="container">
              <p className="col-10 floatLeft">{cat.categoria}</p>
              <p className="col-1 floatLeft">
                <Link to={"/categorias/editar/" + cat.id} className="menuList">
                  <i className="far fa-edit menuList"></i>
                </Link>
              </p>
              <p className="col-1 floatLeft">
                <button
                  className="menuList"
                  onClick={() => {
                    deleteOnClick(cat.id, cat.categoria);
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
