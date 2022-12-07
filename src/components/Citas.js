import "../App.css";
import { Fragment } from "react";
import "./Citas.css";
import eliminar from "../img/delete.png";
import edit from "../img/edit.png";

const Nosotros = () => {
  return (
    <Fragment>
      <section className="general">
        <div className="contenedor-citas">
          <div className="arriba">
            <nav className="text-block">mostrar</nav>
            <a href="#" className="button">
              + Agregar
            </a>
            <div className="pop-up">
              <div className="pop-up-int">
                <div className="form-block">
                  <h1 class="heading-4">Pide tu cita</h1>
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    class="form"
                    aria-label="Email Form"
                  >
                    <div class="campos">
                      <input
                        type="text"
                        class="w-input"
                        maxlength="256"
                        name="name"
                        data-name="Name"
                        placeholder="Nombre"
                        id="Nombre"
                        required
                      ></input>
                      <input
                        type="text"
                        class="w-input"
                        maxlength="256"
                        name="Apellidos"
                        data-name="Apellidos"
                        placeholder="Apellidos"
                        id="Apellidos"
                        required
                      ></input>
                      <input
                        type="tel"
                        class="w-input"
                        maxlength="256"
                        name="Numero-de-telefono"
                        data-name="Numero de telefono"
                        placeholder="Número de telefono"
                        id="Numero-de-telefono"
                        required
                      ></input>
                      <input
                        type="email"
                        class="text-field w-input"
                        maxlength="256"
                        name="Email"
                        data-name="Email"
                        placeholder="Correo electronico"
                        id="Email"
                        required
                      ></input>

                      <input
                        type="date"
                        class="text-field w-input"
                        id="Date"
                        required
                      ></input>

                      <input
                        type="time"
                        class="text-field w-input"
                        id="Time"
                        required
                      ></input>

                      <div class="Bpop-up">
                        <input
                          type="submit"
                          value="Aceptar"
                          data-wait="Please wait..."
                          class="aceptar w-button"
                        ></input>
                        <input
                          type="submit"
                          value="Cancelar"
                          data-wait="Please wait..."
                          data-w-id="de49a73e-c7bf-c7d2-981d-90315b13d6e7"
                          class="submit-button w-button"
                        ></input>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="tabla">
            <div className="fila-1">
              <div id="div-columnas" className="fecha">
                <span className="columnas">Fecha</span>
              </div>
              <div id="div-columnas" className="hora">
                <span className="columnas">Hora</span>
              </div>
              <div id="div-columnas" className="medico">
                <span className="columnas">Medico</span>
              </div>
              <div id="div-columnas" className="estate">
                <span className="columnas">Estado</span>
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
              <div className="pop-up2">
              <div className="pop-up-int2">
                <h1 class="title">Eliminar</h1>
                <div class="cpop-up">
                  <p class="paragraph-2">¿Está seguro que quiere eliminar la cita?</p>
                </div>
                <div class="cbotones">
                  <a href="#" class="aceptar w-button">Aceptar</a>
                  <a href="#" class="submit-button w-button">Cancelar</a>
                  </div>
                
              </div>

              </div>
           
                <img className="icon" src={edit} alt="" />
                <img className="icon" src={eliminar} alt="" />
              </div>
            </div>

            <div id="grid" className="fila-3">
              <span className="columnas">2020-10-07</span>
              <span className="columnas">9:00</span>
              <span className="columnas">Hernan Mendez</span>
              <span className="pendiente">Pendientes</span>
              <div className="icons">
                <img className="icon" src={edit} alt="" />
                <img className="icon" src={eliminar} alt="" />
              </div>
            </div>
            <div id="grid" className="fila-4">
              <span className="columnas">2020-10-07</span>
              <span className="columnas">9:00</span>
              <span className="columnas">Hernan Mendez</span>
              <span className="estadoaceptado">Aceptado</span>
              <div className="icons">
              <div className="pop-up2">
              <div className="pop-up-int2">
                <h1 class="title">Eliminar</h1>
                <div class="cpop-up">
                  <p class="paragraph-2">¿Está seguro que quiere eliminar la cita?</p>
                </div>
                <div class="cbotones">
                  <a href="#" class="aceptar w-button">Aceptar</a>
                  <a href="#" class="submit-button w-button">Cancelar</a>
                  </div>
                
              </div>

              </div>
           
                <img className="icon" src={edit} alt="" />
                <img className="icon" src={eliminar} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Nosotros;
