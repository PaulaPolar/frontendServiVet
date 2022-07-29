import { Fragment, useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../App.css";

const ModificarUsuario = ({}) => {
  const {UpdateUsuario} = useContext(UserContext);
  const history = useHistory();
  const { usuario } = useContext(UserContext);
  const [datos, setDatos] = useState({
    nombre: usuario.nombre,
    contrasena: usuario.contrasena,
    numero: usuario.numero,
    direccion: usuario.direccion,
    correo: usuario.correo
  });

  const handleRoute = () =>{ 
    history.push("/users");
  } 
   const handleInputChange = (event) => {
     //console.log(event.target.value);
     setDatos({
       ...datos, 
       [event.target.name] : event.target.value
 
     })
   }
 
   const enviarDatos = (event) => {
     event.preventDefault();
     console.log(datos.nombre + datos.contrasena + datos.correo + datos.direccion + datos.numero + datos.contrasena);
     console.log("   ");   
     UpdateUsuario(usuario._id, datos);
     console.log(datos);
     handleRoute();
   }

  
  return (
    <Fragment>
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>

            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label
                className="block p-3 mt-3 text-sm text-gray-700 text-center font-semibold"
              >
                Modifica el usuario
              </label>
              <form onSubmit={enviarDatos}>
                <div>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Nombre"
                    required="true"
                    name="nombre"
                    defaultValue={usuario.nombre}
                    onChange={handleInputChange}
                    className="mt-1 block p-3 w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  ></input>
                </div>
                <div className="mt-7">
                  <input
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="Correo electronico"
                    defaultValue={usuario.correo}
                    required="true"
                    onChange={handleInputChange}
                    className="mt-1 block p-3 w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  ></input>
                </div>
             
                <div className="mt-7">
                  <input
                    type="text"
                    placeholder="Direccion"
                    name="direccion"
                    required="true"
                    defaultValue={usuario.direccion}
                    id="direccion"
                    onChange={handleInputChange}
                    className="mt-1 block p-3 w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  ></input>
                </div>
                <div className="mt-7">
                  <input
                    type="number"
                    name="numero"
                    placeholder="Numero de celular"
                    defaultValue={usuario.numero}
                    required="true"
                    id="numero"
                    onChange={handleInputChange}
                    className="mt-1 block p-3 w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  ></input>
                </div>
             
              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  <Link href="/#" to="/users">
                    Cancelar
                  </Link>
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Confirmar
                </button>
                
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ModificarUsuario;
