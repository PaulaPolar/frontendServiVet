import React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import "./Nosotros.css";
import dogo from "../img/dogo.png";
import user from "../img/user.png";
import UserContext from "../context/UserContext";

const Citas = () => {
  const { LoadInfoVeterinaria, infoVeterinaria, LoadPersonal, personal } = useContext(UserContext);


  useEffect(() => {
    LoadInfoVeterinaria();
    LoadPersonal();
  }, []);




  return (
    <Fragment>
      <div className="quienes-somos">
        <div className="div-block-4">
          <div className="titulo">
            <h1 className="h1">¿Quienes Somos?</h1>
            <img className="img" src={dogo} alt="" />
          </div>
          <div className="textos">
            <div className="mision">
              <h3 className="heading-2">Nuestra misión</h3>
              <p>
                {infoVeterinaria.mision}
              </p>
            </div>
            <div className="vision">
              <h3 className="heading-2">Nuestra vision</h3>
              <p>
                {infoVeterinaria.vision}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="nosotros">
        <div className="contenedor">
          <h2 className="h2-mb50"> Nosotros </h2>
          <div className="empleados">
            {personal.map((perfil, i) => (
              <div className="e-especificomb50">
                <div className="foto">
                  <img className="foto-empleado" src={require(`../img/${perfil.imagen}`).default} alt="Empleado" />
                  <p className="nombre"><b>Nombre: </b>{perfil.nombre}</p>
                  <p className="cargo"><b>Cargo: </b>{perfil.cargo}</p>
                  <p className="experiencia"><b>Experiencia: </b>Experiencia</p>
                </div>
                <p className="descripcion-cargo">
                <b>Descripcion : </b>{perfil.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="visitanos">
        <div className="contenedorinfo">
          <div className="divcontenedor">
            <h1 className="h1visitanos">Visitanos</h1>
            <div className="infovisitanos">
              <p className="direccion"><b>Direccion: </b> {infoVeterinaria.direccion}</p>
              <p className="numero"><b>Numero: </b> {infoVeterinaria.numero}</p>
              <p className="correo"><b>Email: </b>{infoVeterinaria.correo}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Citas;
