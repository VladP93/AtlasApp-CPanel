import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";
import RepartidorForm from "../forms/RepartidorForm";
import Footer from "../common/Footer";

export default function CrearRepartidor() {
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Afiliar Repartidor" dynamicText="" />
        <RepartidorForm />
      </div>
      <Footer />
    </div>
  );
}
