import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";

export default function CrearAdministrador() {
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Crear una cuenta de administrador" dynamicText="" />
      </div>
      <h1 className="centered">Crear Administrador</h1>
    </div>
  );
}
