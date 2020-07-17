import React from "react";
import { Link } from "react-router-dom";

export default function HomeForm() {
  return (
    <div className="row centerContent">
      <div className="col-md-6 col-lg-4 col-xl-3 text-white bg-atlas border-light mb-3 card cardsMargin">
        <br />
        <Link to={"/resumen"} className="stretched-link text-warning">
          <h2 className="centrarTxt">Resumen</h2>
        </Link>
        <br />
        <i className="far fa-file-alt h2"></i>
        <br />
        <p style={{ textAlign: "justify" }}>Resumen</p>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-3 text-white bg-atlas border-light mb-3 card cardsMargin">
        <br />
        <Link to={"/negocios"} className="stretched-link text-warning">
          <h2 className="centrarTxt">Negocios</h2>
        </Link>
        <br />
        <i className="far fa-building h2"></i>
        <br />
        <p style={{ textAlign: "justify" }}>Negocios</p>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-3 text-white bg-atlas border-light mb-3 card cardsMargin">
        <br />
        <Link to={"/categorias"} className="stretched-link text-warning">
          <h2 className="centrarTxt">Categorías</h2>
        </Link>
        <br />
        <i className="fas fa-tags h2"></i>
        <br />
        <p style={{ textAlign: "justify" }}>Categorías</p>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-3 text-white bg-atlas border-light mb-3 card cardsMargin">
        <br />
        <Link to={"/repartidores"} className="stretched-link text-warning">
          <h2 className="centrarTxt">Repartidores</h2>
        </Link>
        <br />
        <i className="fas fa-motorcycle h2"></i>
        <br />
        <p style={{ textAlign: "justify" }}>Repartidores</p>
      </div>
      <div className="col-md-6 col-lg-4 col-xl-3 text-white bg-atlas border-light mb-3 card cardsMargin">
        <br />
        <Link to={"/administradores"} className="stretched-link text-warning">
          <h2 className="centrarTxt">Administradores</h2>
        </Link>
        <br />
        <i className="fas fa-users-cog centrarTxt h3"></i>
        <br />
        <p style={{ textAlign: "justify" }}>Administradores</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
