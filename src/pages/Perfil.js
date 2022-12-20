import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import PerfilComponent from "../components/Perfil";

const Perfil = () => {

  if (localStorage.getItem('token') != "") {

  return (
    <div>
      <Nav />
      <PerfilComponent />
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

export default Perfil;