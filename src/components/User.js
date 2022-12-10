import React, { Fragment, useState, useEffect, useContext } from "react";

import Usuario from "../components/Usuario";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const User = ({ }) => {

  const { LoadUsuarios, usuarios } = useContext(UserContext);

  const [error, setError] = useState(false);

  useEffect(() => {
    LoadUsuarios();

  }, []);

  return (
    <Fragment>
      <section >
        <div className="relative m-8 flex mt-10 items-center text-center">
          <hr className="border-gray-400 border-1 w-full rounded-md"></hr>
          <label className="block font-bold text-6xl text-black w-full">
            Clientes
          </label>
          <hr className="border-gray-400 border-1 w-full rounded-md"></hr>
        </div>
        <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
          <div class="overflow-y-hidden rounded-lg border">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                    <th class="px-5 py-3">ID</th>
                    <th class="px-5 py-3">Nombre</th>
                    <th class="px-5 py-3">Correo</th>
                    <th class="px-5 py-3">Direccion</th>
                    <th class="px-5 py-3">Telefono</th>
                    <th class="px-5 py-3">Eliminar</th>
                  </tr>
                </thead>
                <tbody class="text-gray-500">
                {usuarios.map((usuario, i) => (
                      <Usuario usuario={usuario} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default User;
