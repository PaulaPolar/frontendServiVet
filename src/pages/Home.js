import React from "react";
import Nav from "../components/Nav";
import Carosel from "../components/Carosel";

import Footer from "../components/Footer";
import Card from "../components/Card";
import Botones from "../components/Botones";

const Home = () => {
  return (
    <div>
      <Nav />
      <Carosel />
      <Botones />
      <Card />
      <Footer />     
  
    </div>
  );
};

export default Home;
