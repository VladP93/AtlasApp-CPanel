import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";

export default function CrearCategoria() {
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Registrar una categoría" dynamicText="" />
      </div>
      <h1 className="centered">Nueva Categorias</h1>
    </div>
  );
}
