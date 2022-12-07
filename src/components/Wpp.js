import { Fragment } from "react";
import React from "react";
import "./Wpp.css";

const Wpp = ({ }) => {
    return (
        <Fragment>
            <div className="container-boton">
                <a href="https://wa.me/987654321?text=Quiero%20realizar%20un%20proyecto%20web%20php" target="_blank">
                    <img className="boton" src={require(`../img/wpp.png`).default} alt="obtener informacion" />
                </a>
            </div>
        </Fragment>
    );
};

export default Wpp;