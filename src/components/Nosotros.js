import React from "react";
import { Fragment } from "react";
import "./Nosotros.css";
import dogo from "../img/dogo.png";
import user from "../img/user.png";
const Citas = () => {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div className="vision">
              <h3 className="heading-2">Nuestra misión</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="nosotros">
        <div className="contenedor">
          <h2 className="h2-mb50"> Nosotros </h2>
          <div className="empleados">

          <div className="e-especificomb50">
              <div className="foto">
                <img className="foto-empleado" src={user} alt="Empleado" />
                <p className="nombre">Nombre</p>
                <p className="cargo">Cargo</p>
                <p className="experiencia">Experiencia</p>   
              </div>
              <p className="descripcion-cargo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>


            <div className="e-especificomb50">
              <div className="foto">
                <img className="foto-empleado" src={user} alt="Empleado" />
                <p className="nombre">Nombre</p>
                <p className="cargo">Cargo</p>
                <p className="experiencia">Experiencia</p>   
              </div>
              <p className="descripcion-cargo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>

            <div className="e-especificomb50">
              <div className="foto">
                <img className="foto-empleado" src={user} alt="Empleado" />
                <p className="nombre">Nombre</p>
                <p className="cargo">Cargo</p>
                <p className="experiencia">Experiencia</p>   
              </div>
              <p className="descripcion-cargo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="visitanos">
        <div className="contenedorinfo">
          <div className="divcontenedor">
            <h1 className="h1visitanos">Visitanos</h1>
            <div className="infovisitanos">
              <p className="direccion">Direccion: </p>
              <p className="numero">Numero: 3043751465</p>
              <p className="correo">Email: servivet32@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Citas;
