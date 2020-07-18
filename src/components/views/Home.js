import React from "react";
import Header from "../common/Header";
import Slider from "../common/Slider";
import Footer from "../common/Footer";
import HomeForm from "../forms/HomeForm";

export default function Home() {
  const texto = "Bienvenido al panel de control de AtlasApp";
  return (
    <div>
      <Header />
      <div className="container-fluid fluidContent">
        <Slider texto={texto} hideBar={true} />
        <HomeForm />
      </div>
      <br />
      <Footer />
    </div>
  );
}
