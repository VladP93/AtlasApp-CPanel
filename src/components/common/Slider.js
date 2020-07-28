import React from "react";
import LogoInv from "../../assets/images/logo-inv.jpg";
import SliderBarForm from "./SliderBarForm";

export default function Slider(props) {
  const {
    texto,
    padre,
    filtro,
    isList,
    isResumen,
    dynamicText,
    hideBar,
    selectOnChange,
    buscar,
    resumeText,
  } = props;

  return (
    <div>
      <div className="centerContent">
        <h1 className="centerContent">{texto}</h1>
        <img src={LogoInv} alt="Logo invertido" className="width10pc" />
      </div>
      <br />
      {!hideBar && (
        <div className="text-white roundiv sliderBar">
          {isList ? (
            <SliderBarForm
              padre={padre}
              filtro={filtro}
              selectOnChange={selectOnChange}
              buscar={buscar}
            />
          ) : (
            <h2 style={{ textAlign: "center", margin: "auto" }}>
              {isResumen ? resumeText : "Registrando: " + dynamicText}
            </h2>
          )}
        </div>
      )}
    </div>
  );
}
