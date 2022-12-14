import React from "react";
import Nav from "../components/Nav";

import Footer from "../components/Footer";
import Citas from "../components/Citas";
import NavCitas from "../components/NavCitas";

const Dudas = () => {
  return (
    <div>
      <Nav />
      <NavCitas/>
      <Citas/>
      <Footer />
    </div>
  );
};

export default Dudas;
