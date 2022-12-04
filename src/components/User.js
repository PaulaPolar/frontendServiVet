import React, { Fragment, useState, useEffect, useContext } from "react";

import Usuario from "../components/Usuario";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const User = ({}) => {

  const {LoadUsuarios, usuarios} = useContext(UserContext);

  const [error, setError] = useState(false);

  useEffect(() => {
    LoadUsuarios();
 
  }, []);

  return (
    <Fragment>
      <section class="antialiased text-gray-600 h-screen px-4">
        <div className="relative m-8 flex mt-10 items-center text-center">
          <hr className="border-gray-400 border-1 w-full rounded-md"></hr>
          <label className="block font-bold text-6xl text-black w-full">
            Clientes
          </label>
          <hr className="border-gray-400 border-1 w-full rounded-md"></hr>
        </div>
        
        <div class="w-full max-w-2xl mx-auto  ">
         
        <button class="  px-8 py-4  rounded-x1 flex space-x-2  bot hover:bg-red-200 text-3xl text-white font-bold rounded-xl transition duration-200 ">
                <Link href="/#" to="/nuevoUsuario">
                  Agregar
                </Link>
                <div class="flex items-center -space-x-3 translate-x-3">
                  <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>
          
              
              </div>
        <div class="flex flex-col justify-center  ">
          
          <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-300">
        
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left text-pink-600">
                          NOMBRE
                        </div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left text-pink-600">
                          CORREO
                        </div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left text-pink-600">
                          DIRECCION
                        </div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center text-pink-600">
                          TELEFONO
                        </div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center text-pink-600">
                          MODIFICAR
                        </div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center text-pink-600">
                          ELIMINAR
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                     {usuarios.map((usuario, i) => (
                      <Usuario usuario={usuario} />
                    ))}  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default User;
