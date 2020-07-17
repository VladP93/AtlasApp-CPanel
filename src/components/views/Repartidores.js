import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";

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
          texto="Negocios afiliados"
          padre="/repartidores"
          filtro={filtro}
          isList={true}
        />
      </div>
      <h1 className="centered">Lista de repartidores</h1>
    </div>
  );
}
