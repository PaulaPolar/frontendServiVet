import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ModificarU from "../components/ModificarUsuario";
import { Link } from "react-router-dom";

const ModificarUsuario = () => {

  if (localStorage.getItem('token') != "") {

  return (
    <div>
      <Nav />
      <ModificarU />
      <Footer />
    </div>
  );
  } else {
    return <div>Debe inciar sesion primero!
      <br></br>
      <Link to={"/home"}>Regresar a Home</Link>
    </div>
  }
};

export default ModificarUsuario;