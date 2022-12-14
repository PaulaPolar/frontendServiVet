import React, { Fragment } from "react";
import "./TablaAdmin.css";

const TablaAdmin = () => {
  return (
    <Fragment>
     
     <section className="general">
        <div className="contenedor-citas">
          <div className="arriba">
            <nav className="text-block">Administrador</nav>
          </div>
          <div className="tabla">
            <div className="fila-1">
              <div id="div-columnas" className="fecha">
                <span className="columnas">Fecha</span>
              </div>
              <div id="div-columnas" className="hora">
                <span className="columnas">Hora Inicial</span>
              </div>
              <div id="div-columnas" className="medico">
                <span className="columnas">Hora Final</span>
              </div>
              <div id="div-columnas" className="medico">
                <span className="columnas">Paciente</span>
              </div>

              <div id="div-columnas" className="hora">
                <span className="columnas">Acciones</span>
              </div>
            </div>

            <div id="grid" className="fila-2">
              <span className="columnas">2020-10-07</span>
              <span className="columnas">9:00</span>
              <span className="columnas">Hernan Mendez</span>
              <span className="estadoaceptado">Aceptado</span>
              <div className="icons">     
              <a href="#" class="submit-button fila2 w-button">Cancelar Cita</a>
              </div>
            </div>

            <div id="grid" className="fila-3">
              <span className="columnas">2020-10-07</span>
              <span className="columnas">9:00</span>
              <span className="columnas">Hernan Mendez</span>
              <span className="pendiente">Pendientes</span>
              <div className="icons">
                <a href="#" class="submit-button fila2 w-button">Cancelar Cita</a>
              </div>
            </div>

        

            <div id="grid" className="fila-4">
              <span className="columnas">2020-10-07</span>
              <span className="columnas">9:00</span>
              <span className="columnas">Hernan Mendez</span>
              <span className="estadoaceptado">Aceptado</span>
              <div className="icons">
              <a href="#" class="submit-button fila2 w-button">Cancelar Cita</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default TablaAdmin;
