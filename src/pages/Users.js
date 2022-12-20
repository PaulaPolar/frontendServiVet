import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import User from "../components/User";
import { Link } from "react-router-dom";

const Users = () => {

  if (localStorage.getItem('token') != "") {
  return (
    <div>
      <Nav />
      <User />
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

export default Users;
