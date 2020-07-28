import React from "react";

export default function LocalForm() {
  return (
    <div>
      <span id="addLocal">
        <hr />
        <div className="form-group">
          <label htmlFor="horaA">Hora de apertura</label>
          <input
            type="time"
            id="horaA"
            name="horaA"
            className="form-control"
            min="00:01"
            max="23:59"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="horaC">Hora de cierre</label>
          <input
            type="time"
            id="horaC"
            name="horaC"
            className="form-control"
            min="00:01"
            max="23:59"
          ></input>
        </div>
        <div className="form-check">
          <p style={{ marginLeft: -20, marginBottom: 5 }}>Días hábiles:</p>
          {/* {dias.map((dia) => {
            return (
              <div key={dia.value}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={dia.value}
                  defaultChecked
                />
                <label className="form-check-label" htmlFor={dia.value}>
                  {dia.display}
                </label>
              </div>
            );
          })} */}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            placeholder="Dirección"
          />
        </div>
        <div
          style={{
            border: "1px solid lightslategrey",
            width: "100%",
            height: "250px",
          }}
        >
          <i className="fas fa-map-marked-alt h1"></i>
        </div>
        <br />
      </span>
    </div>
  );
}
