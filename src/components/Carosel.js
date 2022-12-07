import React from "react";
import { Slideshow, Slide, TextoSlide } from "./SlideShow";
import "../styles/estilos.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img2 from "../img/animal2.png";

const Carosel = () => {
  return (
    <main>
      <Slideshow
        controles={true}
        autoplay={false}
        velocidad="2000"
        intervalo="4000"
      >
        <Slide>
          <Link
            to="/servicios"
            className="font-bold text-3xl text-green-400  hover:text-white"
            href="/#"
          >
            <img src={img2} alt="" />
          </Link>
          <TextoSlide>
            <p>Conoce en que podemos servir a tu mascota</p>
            <p>Revisa nuestros servicos!!!</p>
            
          </TextoSlide>
          
        </Slide>
        <Slide>
          <Link
            to="/servicios"
            className="font-bold text-3xl text-green-400  hover:text-white"
            href="/#"
          >
            <img
              src="https://img.freepik.com/foto-gratis/cachorro-gris-veterinario_329181-10410.jpg?size=626&ext=jpg"
              alt=""
            />
          </Link>

          
          <TextoSlide>
            <h5>Tu mascota necesita que la revises!!!</h5>
            <p>No esperes mas, AGENDA TU CITA AQUI!  </p>
          </TextoSlide>
        </Slide>
        <Slide>
          <Link
            to="/productos"
            className="font-bold text-3xl text-green-400  hover:text-white"
            href="/#"
          >
            <img
              src="https://mizooland.com/wp-content/uploads/2015/04/Productos-Completos.jpg"
              alt=""
            />
          </Link>
          <TextoSlide>
            <h5>Encarga lo que necesitas para tu mascota</h5>
            <p>Te estamos esperando a ti!!!</p>
          </TextoSlide>
        </Slide>
      </Slideshow>
    </main>
  );
};

const Titulo = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export default Carosel;
