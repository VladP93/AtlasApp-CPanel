import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";
import NegocioDetalleLocal from "../forms/NegocioDetalleLocal";
import NegocioDetalleMenu from "../forms/NegocioDetalleMenu";

const db = firebase.firestore(firebaseApp);

export default function DetalleNegocio(props) {
  const id = props.match.params.id;
  const [nombre, setNombre] = useState("");
  const [redirectTo404, setRedirectTo404] = useState(false);

  useEffect(() => {
    db.collection("negocios")
      .doc(id)
      .get()
      .then((res) => {
        if (res.data()) {
          setNombre(res.data().nombre);
        } else {
          setRedirectTo404(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (redirectTo404) {
    return <Redirect to="/error" />;
  }

  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider
          texto="Ver detalles"
          resumeText={"Detalles de " + nombre}
          isResumen={true}
        />
        <br />
        <h3>Locales</h3>
        <hr />
        <NegocioDetalleLocal id={id} />
        <br />
        <h3>Menú</h3>
        <hr />
        <NegocioDetalleMenu id={id} />
      </div>
      <br />
      <Footer />
    </div>
  );
}
