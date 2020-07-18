import React from "react";

export default function ResumenForm() {
  return (
    <div>
      <div className="container">
        <h3 style={{ float: "left" }}>Monto del día:</h3>
        <p style={{ float: "right" }}>$monto.dia</p>
      </div>
      <div className="clearfix"></div>
      <hr />
      <div className="container">
        <h5 style={{ float: "left" }}>Entregas del día:</h5>
        <p style={{ float: "right" }}>$entregas.dia</p>
      </div>
      <div className="clearfix"></div>
      <hr />

      <div className="container">
        <h3 style={{ float: "left" }}>Monto de ayer:</h3>
        <p style={{ float: "right" }}>$monto.ayer</p>
      </div>
      <div className="clearfix"></div>
      <hr />
      <div className="container">
        <h5 style={{ float: "left" }}>Entregas de ayer:</h5>
        <p style={{ float: "right" }}>$entregas.ayer</p>
      </div>
      <div className="clearfix"></div>
      <hr />

      <div className="container">
        <h3 style={{ float: "left" }}>Monto del mes:</h3>
        <p style={{ float: "right" }}>$monto.mes</p>
      </div>
      <div className="clearfix"></div>
      <hr />
      <div className="container">
        <h5 style={{ float: "left" }}>Entregas del mes:</h5>
        <p style={{ float: "right" }}>$entregas.mes</p>
      </div>
      <div className="clearfix"></div>
      <hr />

      <div className="container">
        <h3 style={{ float: "left" }}>Monto total:</h3>
        <p style={{ float: "right" }}>$monto.total</p>
      </div>
      <div className="clearfix"></div>
      <hr />
      <div className="container">
        <h5 style={{ float: "left" }}>Entregas totales:</h5>
        <p style={{ float: "right" }}>$entregas.total</p>
      </div>
      <div className="clearfix"></div>
      <hr />
    </div>
  );
}
