import React, { useState } from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";
import NegocioForm from "../forms/NegocioForm";

export default function EditarNegocio(props) {
  const id = props.match.params.id;
  const [dynamicText, setDynamicText] = useState("");

  const onchangeText = (texto) => {
    setDynamicText(texto);
  };

  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Editar un negocio" dynamicText={dynamicText} />
        <NegocioForm onchangeText={onchangeText} id={id} />
      </div>
      <br />
      <Footer />
    </div>
  );
}
