import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function CategoriaForm(props) {
  const { onchangeText, id } = props;
  const [redirecting, setRedirecting] = useState(false);
  const [redirectTo404, setRedirectTo404] = useState(false);
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [label, setLabel] = useState("Nueva Categoría");
  const [viejaCategoria, setViejaCategoria] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("categorias")
        .doc(id)
        .get()
        .then((res) => {
          if (res.data()) {
            setLabel("Editar Categoría");
            setViejaCategoria(res.data().categoria);
          } else {
            setRedirectTo404(true);
          }
        });
    }
  }, [id, viejaCategoria]);

  const onchange = (e) => {
    setNuevaCategoria(e.target.value);
    onchangeText(e.target.value);
  };

  const submitCategoria = (e) => {
    e.preventDefault();

    if (!id) {
      db.collection("categorias")
        .add({ categoria: nuevaCategoria })
        .then(() => {
          Swal.fire(
            "Categoría agregada",
            nuevaCategoria + " ha sido agregado correctamente",
            "success"
          );
          setRedirecting(true);
        })
        .catch((err) => {
          Swal.fire("Algo salió mal", "Error: " + err, "error");
        });
    } else {
      if (nuevaCategoria.length === 0) {
        Swal.fire(
          "La categoría no ha sido editada",
          "No se han producido cambios",
          "info"
        );
        setRedirecting(true);
      } else {
        db.collection("categorias")
          .doc(id)
          .update({ categoria: nuevaCategoria })
          .then(() => {
            Swal.fire(
              "Categoría editada",
              "La categoría " +
                viejaCategoria +
                " ha sido cambiada por " +
                nuevaCategoria +
                " correctamente",
              "success"
            );
            setRedirecting(true);
          })
          .catch((err) => {
            Swal.fire("Algo salió mal", "Error: " + err, "error");
          });
      }
    }
  };

  if (redirecting) {
    return <Redirect to="/categorias" />;
  }
  if (redirectTo404) {
    return <Redirect to="/error" />;
  }

  return (
    <div>
      <br />

      <form
        onSubmit={(e) => {
          submitCategoria(e);
        }}
      >
        <div className="form-group">
          <label htmlFor="categoria">{label}</label>
          <input
            type="text"
            className="form-control"
            id="categoria"
            placeholder="Categoría"
            defaultValue={viejaCategoria}
            onChange={(e) => {
              onchange(e);
            }}
            required
          />
        </div>
        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
}
