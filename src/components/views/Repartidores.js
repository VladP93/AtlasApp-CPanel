import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";

export default function Repartidores() {
  const filtro = [
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
    {
      value: "estadoA",
      display: "Estado ▲",
    },
    {
      value: "estadoD",
      display: "Estado ▼",
    },
    {
      value: "telefonoA",
      display: "Teléfono ▲",
    },
    {
      value: "telefonoD",
      display: "Teléfono ▼",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider
          texto="Socios repartidores"
          padre="/repartidores"
          filtro={filtro}
          isList={true}
        />
      </div>
      <Footer fixed={true} />
    </div>
  );
}
