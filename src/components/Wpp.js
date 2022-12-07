import { Fragment } from "react";
import React from "react";
import "./Wpp.css";

const Wpp = ({ }) => {
    return (
        <Fragment>
            <div className="container-boton">
                <a href="https://wa.me/573174587155?text=Saber%20mas%20acerca%20de%20la%20veterinaria" target="_blank">
                    <img className="boton" src={require(`../img/wpp.png`).default} alt="obtener informacion" />
                </a>
            </div>
        </Fragment>
    );
};

export default Wpp;