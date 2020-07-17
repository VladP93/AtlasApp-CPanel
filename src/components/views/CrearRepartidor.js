import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";

export default function CrearRepartidor() {
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Afiliar Repartidor" dynamicText="" />
      </div>
      <h1 className="centered">Nuevo Repartidor</h1>
    </div>
  );
}
