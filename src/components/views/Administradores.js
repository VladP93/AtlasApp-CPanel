import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";

export default function Administradores() {
  const filtro = [
    {
      value: "duiA",
      display: "DUI ▲",
    },
    {
      value: "duiD",
      display: "DUI ▼",
    },
    {
      value: "nombreA",
      display: "Nombre ▲",
    },
    {
      value: "nombreD",
      display: "Nombre ▼",
    },
    {
      value: "apellidoA",
      display: "Apellido ▲",
    },
    {
      value: "apellidoD",
      display: "Apellido ▼",
    },
  ];
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider
          texto="Lista de Administradores"
          padre="/administradores"
          filtro={filtro}
          isList={true}
        />
      </div>
      <Footer fixed={true} />
    </div>
  );
}
