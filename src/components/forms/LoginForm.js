import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function LoginForm() {
  const [isLogged, setIsLogged] = useState(false);

  const Loggearse = () => {
    setIsLogged(true);
    document.body.style.backgroundColor = "#FFF";
  };

  if (isLogged) {
    return <Redirect to="/panel" />;
  }

  document.body.style.backgroundColor = "rgb(253, 70, 70)";

  return (
    <form name="login" className="margenFormCard" onSubmit={Loggearse}>
      <p>
        <b>Bienvenido a AtlasApp</b>
      </p>
      <div className="form-group">
        <label htmlFor="user">
          <i className="fas fa-user"></i> Usuario:
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Ingrese Usuario"
          id="user"
          autoComplete="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="pwd">
          <i className="fas fa-lock"></i> Contraseña:
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Ingrese Contraseña"
          id="pwd"
          autoComplete="current-password"
        />
      </div>
      <div className="form-group">
        <div className="alinearIzquierda">
          <a href="/">Olvidé mi contraseña</a>
        </div>
        <div className="alinearDerecha">
          <input
            type="submit"
            className="btn btn-success"
            value="Iniciar sesión"
          />
        </div>
      </div>
    </form>
  );
}
