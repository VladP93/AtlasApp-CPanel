import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";

export default function Categorias() {
  const filtro = [
    {
      value: "categoriaA",
      display: "Categoría ▲",
    },
    {
      value: "categoriaD",
      display: "Categoria▼",
    },
  ];
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider
          texto="Categorías actuales"
          padre="/categorias"
          filtro={filtro}
          isList={true}
        />
      </div>
      <h1 className="centered">Categorias</h1>
    </div>
  );
}
