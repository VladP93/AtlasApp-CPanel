import React, { useState } from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";
import CategoriaForm from "../forms/CategoriaForm";

export default function CrearCategoria() {
  const [dynamicText, setDynamicText] = useState("");

  const onchangeText = (texto) => {
    setDynamicText(texto);
  };

  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Registrar una categoría" dynamicText={dynamicText} />
        <CategoriaForm onchangeText={onchangeText} />
      </div>
      <Footer fixed={true} />
    </div>
  );
}
