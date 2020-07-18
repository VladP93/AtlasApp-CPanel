import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";
import NegocioForm from "../forms/NegocioForm";

export default function CrearNegocio() {
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Registrar un negocio" dynamicText="" />
        <br />
        <NegocioForm />
      </div>
      <br />
      <Footer />
    </div>
  );
}
