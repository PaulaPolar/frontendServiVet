import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext.js";

const LoginC = () => {

  const { iniciarSesion } = useContext(UserContext);

  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const history = useHistory();
  const routeChange = () => {
    let path = `/perfil`;
    history.push(path);
  }
  return (
    <form>
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label htmlFor className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                Login
              </label>
              <form method="#" action="#" className="mt-10">
                <div>
                  <input type="email" placeholder="Correo electronico" onChange={(e) => { setCorreo(e.target.value); console.log("Correo: " + correo) }} className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                </div>
                <div className="mt-7">
                  <input type="password" placeholder="Contraseña" onChange={(e) => { setClave(e.target.value); console.log("Clave: " + clave) }} className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                </div>
                <div className="mt-7">
                  <button onClick={async (e) => {
                    e.preventDefault();
                    await iniciarSesion(correo, clave).then((res) => {
                      if (res == null) {
                        alert("No se pudo inciar sesion!")
                      } else {
                        routeChange()
                      }
                    }).catch((err) =>
                      alert("No se pudo inciar sesion!")
                    );
                  }} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Iniciar sesion
                  </button>

                </div>
                <div className="mt-7">
                  <div className="flex justify-center items-center">
                    <label className="mr-2">¿Eres nuevo?</label>

                    <Link className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                      href="/#"
                      to="/registro"
                    >
                      Crea una cuenta
                    </Link>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

};

export default LoginC;