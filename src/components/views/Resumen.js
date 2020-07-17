import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";

export default function Resumen() {
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto="Resumen de AtlasApp" isResumen={true} />
      </div>
      <h1 className="centered">Resumen</h1>
    </div>
  );
}
