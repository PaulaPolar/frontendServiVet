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
      <section >
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
        <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
  <div class="flex items-center justify-between pb-6">
    <div>
      <h2 class="font-semibold text-gray-700">User Accounts</h2>
      <span class="text-xs text-gray-500">View accounts of registered users</span>
    </div>
    <div class="flex items-center justify-between">
      <div class="ml-10 space-x-8 lg:ml-40">
        <button class="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
          </svg>

          CSV
        </button>
      </div>
    </div>
  </div>
  <div class="overflow-y-hidden rounded-lg border">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
            <th class="px-5 py-3">ID</th>
            <th class="px-5 py-3">Full Name</th>
            <th class="px-5 py-3">User Role</th>
            <th class="px-5 py-3">Created at</th>
            <th class="px-5 py-3">Status</th>
          </tr>
        </thead>
        <tbody class="text-gray-500">
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">3</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <img class="h-full w-full rounded-full" src="/images/-ytzjgg6lxK1ICPcNfXho.png" alt="" />
                </div>
                <div class="ml-3">
                  <p class="whitespace-no-wrap">Besique Monroe</p>
                </div>
              </div>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Administrator</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Sep 28, 2022</p>
            </td>

            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
            </td>
          </tr>
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">7</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <img class="h-full w-full rounded-full" src="/images/ddHJYlQqOzyOKm4CSCY8o.png" alt="" />
                </div>
                <div class="ml-3">
                  <p class="whitespace-no-wrap">James Cavier</p>
                </div>
              </div>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Author</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Sep 28, 2022</p>
            </td>

            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <span class="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Active</span>
            </td>
          </tr>
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">12</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <img class="h-full w-full rounded-full" src="/images/oPf2b7fqx5xa3mo68dYHo.png" alt="" />
                </div>
                <div class="ml-3">
                  <p class="whitespace-no-wrap">Elvis Son</p>
                </div>
              </div>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Editor</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Sep 28, 2022</p>
            </td>

            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Suspended</span>
            </td>
          </tr>
          <tr>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">66</p>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <img class="h-full w-full rounded-full" src="/images/fR71TFZIDTv2jhvKsOMhC.png" alt="" />
                </div>
                <div class="ml-3">
                  <p class="whitespace-no-wrap">Dana White</p>
                </div>
              </div>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Administrator</p>
            </td>
            <td class="bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Sep 28, 2022</p>
            </td>

            <td class="bg-white px-5 py-5 text-sm">
              <span class="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">Inactive</span>
            </td>
          </tr>
          <tr>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">12</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                  <img class="h-full w-full rounded-full" src="/images/oPf2b7fqx5xa3mo68dYHo.png" alt="" />
                </div>
                <div class="ml-3">
                  <p class="whitespace-no-wrap">Elvis Son</p>
                </div>
              </div>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Editor</p>
            </td>
            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <p class="whitespace-no-wrap">Sep 28, 2022</p>
            </td>

            <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
              <span class="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Suspended</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span class="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
      <div class="mt-2 inline-flex sm:mt-0">
        <button class="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
        <button class="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
      </div>
    </div>
  </div>
</div>
      </section>
    </Fragment>
  );
};

export default User;
