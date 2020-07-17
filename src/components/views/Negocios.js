import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";

export default function Negocios() {
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
      value: "categoriaA",
      display: "Categoria ▲",
    },
    {
      value: "categoriaD",
      display: "Categoria ▼",
    },
    {
      value: "fechaA",
      display: "Fecha de registro ▲",
    },
    {
      value: "fechaD",
      display: "Fecha de registro ▼",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider
          texto="Negocios afiliados"
          padre="/negocios"
          filtro={filtro}
          isList={true}
        />
      </div>
      <h1 className="centered">Negocios</h1>
    </div>
  );
}
