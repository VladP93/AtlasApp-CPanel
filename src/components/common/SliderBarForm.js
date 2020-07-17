import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SliderBarForm(props) {
  const { padre, filtro } = props;
  const [toCreate, setToCreate] = useState("/");

  useEffect(() => {
    //console.log("useEffect");
    setToCreate(padre + "/crear");
  }, [padre]);

  const onchangeSelect = (e) => {
    //console.log(e.target.value);
  };

  return (
    <form>
      <div className="form-group row" style={{ margin: 2 }}>
        <select
          className="form-control col-md-3 col-sm-12 col-xs-12"
          name="ordenar"
          style={{ marginRight: 5 }}
          onChange={(e) => onchangeSelect(e)}
        >
          <option value="">Ordenar por...</option>
          {filtro.map((f) => {
            return (
              <option key={f.value} value={f.value}>
                {f.display}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          className="form-control col-md-3 col-sm-9 col-sx-6"
          name="buscar"
          placeholder="Buscar"
        />
        <button
          type="submit"
          className="btn btn-light col-md-1 col-sm-3 col-xs-6"
        >
          IR
        </button>
        <div className="col-md-2 col-sm-6"></div>
        <Link to={toCreate} className="btn btn-success col-md-2 col-sm-12">
          Nuevo
        </Link>
      </div>
    </form>
  );
}
