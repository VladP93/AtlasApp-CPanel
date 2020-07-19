import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="centered center">
      <p className="h1 latirClass">Error 404</p>
      <p className="latirClass">Page not found</p>
      <Link to={"/panel"}>Ir al Inicio</Link>
    </div>
  );
}
