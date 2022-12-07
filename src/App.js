import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Documentacion from "./pages/Documentacion";
import Productos from "./pages/Productos";
import Conocenos from "./pages/Conocenos";
import Dudas from "./pages/Dudas";
import Servicios from "./pages/Servicios";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import User from "./pages/Users";
import ModificarUsuario from "./pages/ModificarUsuario";
import NuevoUsuario from "./pages/AgregarUsuario";
import Perfil from "./pages/Perfil";
import { UserProvider } from "./context/UserContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/documentacion" exact component={Documentacion} />
          <Route path="/productos" exact component={Productos} />
          <Route path="/conocenos" exact component={Conocenos} />
          <Route path="/dudas" exact component={Dudas} />
          <Route path="/servicios" exact component={Servicios} />
          <Route path="/login" exact component={Login} />
          <Route path="/registro" exact component={Registro} />
          <Route path="/users" exact component={User} />
          <Route path="/perfil" exact component={Perfil} />
          <Route path="/home" exact component={Home} />
          <Route path="/nuevoUsuario" exact component={NuevoUsuario} />
          <Route path="/modificarUsuario" exact component={ModificarUsuario} />
        </Switch>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
