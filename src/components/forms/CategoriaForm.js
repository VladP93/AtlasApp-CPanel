import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function CategoriaForm(props) {
  const { onchangeText } = props;
  const [redirecting, setRedirecting] = useState(false);
  const [nuevaCategoria, setNuevaCategoria] = useState("");

  useEffect(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword("vladimirpaniagua@gmail.com", "pass123")
      .then(() => {
        //Hacer algo xDD
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onchange = (e) => {
    setNuevaCategoria(e.target.value);
    onchangeText(e.target.value);
  };

  const submitCategoria = (e) => {
    e.preventDefault();

    db.collection("categorias")
      .add({ categoria: nuevaCategoria })
      .then((res) => {
        alert(nuevaCategoria + " agregado");
      })
      .catch((err) => {
        console.log(err);
      });

    setRedirecting(true);
  };

  if (redirecting) {
    return <Redirect to="/negocios/crear" />;
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
          <label htmlFor="formGroupExampleInput">Nueva categoría</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Categoría"
            onChange={(e) => {
              onchange(e);
            }}
          />
        </div>
        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
}
