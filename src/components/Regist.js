
import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext.js";

import "../App.css";

const Regist = () => {

  const { registrarUsuario } = useContext(UserContext);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [confirmClave, setConfirmClave] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [celular, setCelular] = useState("");
  const [direccion, setDireccion] = useState("");

  const history = useHistory();
  const routeChange = () => {
    let path = `/login`;
    history.push(path);
  }

  return (

    <form>
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>

            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label
                for=""
                className="block mt-3 text-sm text-gray-700 text-center font-semibold"
              >
                Registrate
              </label>

              <div>
                <input
                  required
                  autoComplete="new-password"
                  type="text"
                  placeholder="Nombres"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  onChange={(e) => { setNombre(e.target.value); console.log("Nombre: " + nombre) }}
                ></input>
                <div className="mt-7">
                  <input
                    required
                    autoComplete="new-password"
                    type="text"
                    placeholder="Apellidos"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    onChange={(e) => { setApellidos(e.target.value); console.log("Apellidos: " + apellidos) }}
                  ></input>
                </div>
                <div className="mt-7">
                  <input
                    required
                    autoComplete="new-password"
                    type="text"
                    placeholder="Celular"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    onChange={(e) => { setCelular(e.target.value); console.log("Celular: " + celular) }}
                  ></input>
                </div>
                <div className="mt-7">
                  <input
                    required
                    autoComplete="new-password"
                    type="text"
                    placeholder="Direccion"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    onChange={(e) => { setDireccion(e.target.value); console.log("Direccion: " + direccion) }}
                  ></input>
                </div>
              </div>
              <div className="mt-7">
                <input
                  required
                  autoComplete="new-password"
                  type="email"
                  placeholder="Correo electronico"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  onChange={(e) => { setCorreo(e.target.value); console.log("Correo: " + correo) }}
                ></input>
              </div>
              <div className="mt-7">
                <input
                  required
                  autoComplete="new-password"
                  type="password"
                  placeholder="Contraseña"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  onChange={(e) => { setClave(e.target.value); console.log("Clave: " + clave) }}
                ></input>
              </div>
              <div className="mt-7">
                <input
                  required
                  autoComplete="off"
                  type="password"
                  placeholder="Confirmar contraseña"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  onChange={(e) => { setConfirmClave(e.target.value); console.log("confirmacion clave: " + confirmClave) }}
                ></input>
              </div>
              <div className="mt-7">
                <button onClick={async () => {

                  if (clave === confirmClave) {
                    const result = await registrarUsuario(nombre, correo, clave, apellidos, celular, direccion);
                    if (result == null) {
                      alert("Hubo un problema en el registro!")
                    } else {
                      alert("Se ha creado el usuario exitosamente!")
                      routeChange();
                    }
                  } else {
                    alert("Las claves no coinciden")
                  }


                }} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Registrar
                </button>
              </div>
              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md"></hr>
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Registrate con
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md"></hr>
              </div>
              <div className="flex mt-7 justify-center w-full">
                <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>
                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>
              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">¿Ya tienes una cuenta?</label>

                  <Link
                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    href="/#"
                    to="/login"
                  >
                    Iniciar sesion
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

  );
};

export default Regist;
