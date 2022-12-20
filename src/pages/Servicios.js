import { useContext } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Services from "../components/Services";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const Servicios = () => {
  const { comprobarToken } = useContext(UserContext);

  if (localStorage.getItem('token') != "") {
    return (
      <div>
        <Nav />
        <Services />
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

export default Servicios;
