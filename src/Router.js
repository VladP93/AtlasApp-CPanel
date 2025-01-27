import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/*Pages*/
import Login from "./components/views/Login";
import Home from "./components/views/Home";
import Resumen from "./components/views/Resumen";
import Negocios from "./components/views/Negocios";
import CrearNegocio from "./components/views/CrearNegocio";
import EditarNegocio from "./components/views/EditarNegocio";
import Categorias from "./components/views/Categorias";
import CrearCategoria from "./components/views/CrearCategoria";
import EditarCategoria from "./components/views/EditarCategoria";
import Repartidores from "./components/views/Repartidores";
import CrearRepartidor from "./components/views/CrearRepartidor";
import Administradores from "./components/views/Administradores";
import CrearAdministrador from "./components/views/CrearAdministrador";

import NotFound from "./components/views/NotFound";

/*Components*/
import Logout from "./components/common/Logout";
import DetalleNegocio from "./components/views/DetalleNegocio";

export default function Router(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/panel" component={Home} />
        <Route exact path="/resumen" component={Resumen} />
        <Route exact path="/negocios" component={Negocios} />
        <Route exact path="/negocios/crear" component={CrearNegocio} />
        <Route exact path="/negocios/editar/:id" component={EditarNegocio} />
        <Route exact path="/negocios/detalle/:id" component={DetalleNegocio} />
        <Route exact path="/categorias" component={Categorias} />
        <Route exact path="/categorias/crear" component={CrearCategoria} />
        <Route
          exact
          path="/categorias/editar/:id"
          component={EditarCategoria}
        />
        <Route exact path="/repartidores" component={Repartidores} />
        <Route exact path="/repartidores/crear" component={CrearRepartidor} />
        <Route exact path="/administradores" component={Administradores} />
        <Route
          exact
          path="/administradores/crear"
          component={CrearAdministrador}
        />

        <Route path="/logout" component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
