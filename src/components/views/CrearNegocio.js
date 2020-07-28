import React, { useState } from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";
import NegocioForm from "../forms/NegocioForm";

export default function CrearNegocio() {
  const [dynamicText, setDynamicText] = useState("");

  const onchangeText = (texto) => {
    setDynamicText(texto);
  };

  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Registrar un negocio" dynamicText={dynamicText} />
        <br />
        <NegocioForm onchangeText={onchangeText} />
      </div>
      <br />
      <Footer />
    </div>
  );
}
