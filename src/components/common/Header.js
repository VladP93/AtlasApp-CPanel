import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import Account from "./Account";

export default function Header() {
  return (
    <header>
      <Account />
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-atlas">
        <NavLink className="navbar-brand logo" to={"/panel"}>
          <img src={Logo} alt="Logo" className="width32px" />
          AtlasApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/panel"}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/resumen"}>
                Resumen
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/negocios"}>
                Negocios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/categorias"}>
                Categorías
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/repartidores"}>
                Repartidores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/administradores"}>
                Administradores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/logout"}>
                Cerrar Sesión
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
