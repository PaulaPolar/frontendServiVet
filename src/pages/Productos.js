import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { Link } from "react-router-dom";

const Productos = () => {
  
  if (localStorage.getItem('token') != "") {
  return (
    <div>
      <Nav />

    <Products />

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

export default Productos;
