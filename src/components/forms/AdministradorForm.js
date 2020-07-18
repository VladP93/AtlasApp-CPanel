import React from "react";

export default function AdministradorForm() {
  return (
    <div>
      <br />

      <form className="row">
        <div className="form-group col-lg-4 col-md-4 col-sm-12">
          <label htmlFor="formGroupExampleInput">DUI:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="DUI"
          />
        </div>
        <div className="form-group col-lg-4 col-md-4 col-sm-12">
          <label htmlFor="formGroupExampleInput">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Nombre"
          />
        </div>
        <div className="form-group col-lg-4 col-md-4 col-sm-12">
          <label htmlFor="formGroupExampleInput">Apellido:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Apellido"
          />
        </div>
        <div className="form-group col-lg-4 col-md-4 col-sm-12">
          <label htmlFor="formGroupExampleInput">Teléfono:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Teléfono"
          />
        </div>
        <div className="form-group col-lg-4 col-md-4 col-sm-12">
          <label htmlFor="formGroupExampleInput">Usuario:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Usuario"
          />
        </div>
        <div className="form-group col-lg-4 col-md-4 col-sm-12">
          <label htmlFor="formGroupExampleInput">Email:</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Email"
          />
        </div>

        <input
          type="submit"
          value="Guardar"
          className="btn btn-success form-control col-lg-2 col-md-2 col-sm-2 form-group"
          style={{
            marginLeft: "1.75%",
            marginRight: "1.75%",
          }}
        />
        <div className="col-lg-10 col-md-10 col-sm-10"></div>
      </form>
    </div>
  );
}
