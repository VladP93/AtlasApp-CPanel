import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";

export default function CrearNegocio() {
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Registrar un negocio" dynamicText="" />
      </div>
      <h1 className="centered">Nuevo Negocios</h1>
    </div>
  );
}
