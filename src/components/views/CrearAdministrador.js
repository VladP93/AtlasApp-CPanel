import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";
import AdministradorForm from "../forms/AdministradorForm";

export default function CrearAdministrador() {
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Crear una cuenta de administrador" dynamicText="" />
        <AdministradorForm />
      </div>
      <Footer />
    </div>
  );
}
