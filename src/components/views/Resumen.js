import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";
import ResumenForm from "../forms/ResumenForm";
import Footer from "../common/Footer";

export default function Resumen() {
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider
          texto="Resumen de AtlasApp"
          isResumen={true}
          resumeText={"Resumen de Atlas"}
        />
        <br />
        <ResumenForm />
      </div>
      <Footer />
    </div>
  );
}
