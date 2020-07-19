import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../utils/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export default function NegocioForm() {
  const [showLocal, setShowLocal] = useState(false);
  const [showText, setShowText] = useState("Agregar Local");
  const [categorias, setCategorias] = useState([]);
  const dias = [
    {
      value: "lunes",
      display: "Lunes",
    },
    {
      value: "martes",
      display: "Martes",
    },
    {
      value: "Miercoles",
      display: "Miércoles",
    },
    {
      value: "jueves",
      display: "Jueves",
    },
    {
      value: "viernes",
      display: "Viernes",
    },
    {
      value: "sabado",
      display: "Sábado",
    },
    {
      value: "domingo",
      display: "Domingo",
    },
  ];

  useEffect(() => {
    db.collection("categorias")
      .get()
      .then((response) => {
        const categoriaArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          categoriaArray.push(data);
        });
        setCategorias(categoriaArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const agregarLocal = () => {
    setShowLocal(!showLocal);
    if (!showLocal) {
      setShowText("Ocultar Local");
    } else {
      setShowText("Agregar Local");
    }
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Nombre del negocio"
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoria">Categoría</label>
          <select id="categoria" className="form-control">
            <option defaultValue>Seleccione una categoría...</option>
            {categorias.map((cat) => {
              return <option key={cat.id}>{cat.categoria}</option>;
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            className="form-control"
            id="descripcion"
            placeholder="Nombre del negocio"
            style={{ minHeight: 100, maxHeight: 250 }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="file0">Foto</label>
          <input
            type="file"
            className="form-control-file"
            id="file0"
            name="file0"
          />
        </div>
        <input
          type="button"
          value={showText}
          className="btn btn-info"
          style={{ marginRight: 2 }}
          onClick={agregarLocal}
        />
        {showLocal && (
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
              {dias.map((dia) => {
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
              })}
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
        )}
        <input type="submit" value="Guardar" className="btn btn-success" />
      </form>
    </div>
  );
}
