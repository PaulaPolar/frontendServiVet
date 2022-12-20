import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Citas from "../components/Citas";
import NavCitas from "../components/NavCitas";

const Dudas = () => {

  if (localStorage.getItem('token') != "") {
    return (
      <div>
        <Nav />
        <NavCitas />
        <Citas />
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

export default Dudas;
