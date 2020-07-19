import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function LoginForm() {
  const [isLogged, setIsLogged] = useState(false);
  const [formData, setFormData] = useState({
    usuario: "",
    contrasenia: "",
  });

  const Loggearse = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(formData.usuario, formData.contrasenia)
      .then((res) => {
        db.collection("administradores")
          .where("uidUser", "==", res.user.uid)
          .get()
          .then((res2) => {
            if (res2.docs.length > 0) {
              Swal.fire("Bienvenido " + res.user.displayName);
              setIsLogged(true);
              document.body.style.backgroundColor = "#FFF";
            } else {
              firebase.auth().signOut();
              setIsLogged(false);
              Swal.fire(
                "Error",
                "El usuario ingresado no está registrado como administrador",
                "error"
              );
            }
          })
          .catch((err) => {
            Swal.fire("Error", err.message, "error");
          });
      })
      .catch((err) => {
        Swal.fire("Error", "Usuario y/o contraseña incorrectos", "error");
      });
  };

  const onChangeForm = (e, type) => {
    setFormData({ ...formData, [type]: e.target.value });
  };

  if (isLogged) {
    return <Redirect to="/panel" />;
  }

  document.body.style.backgroundColor = "rgb(253, 70, 70)";

  return (
    <form
      name="login"
      className="margenFormCard"
      onSubmit={(e) => {
        Loggearse(e);
      }}
    >
      <p>
        <b>Bienvenido a AtlasApp</b>
      </p>
      <div className="form-group">
        <label htmlFor="user">
          <i className="fas fa-user"></i> Usuario:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese Usuario"
          id="user"
          autoComplete="username"
          onChange={(e) => {
            onChangeForm(e, "usuario");
          }}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">
          <i className="fas fa-lock"></i> Contraseña:
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Ingrese Contraseña"
          id="pwd"
          autoComplete="current-password"
          onChange={(e) => {
            onChangeForm(e, "contrasenia");
          }}
          required
        />
      </div>
      <div className="form-group">
        <div className="alinearIzquierda">
          <a href="/">Olvidé mi contraseña</a>
        </div>
        <div className="alinearDerecha">
          <input
            type="submit"
            className="btn btn-success"
            value="Iniciar sesión"
          />
        </div>
      </div>
    </form>
  );
}
