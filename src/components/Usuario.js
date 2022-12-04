import React, { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

const Usuario = ({ usuario }) => {
  const {DeleteUsuario, setUsuario} = useContext(UserContext);
  const history = useHistory();


  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function modificarU(user) {
    setUsuario(user);
    history.push("/modificarUsuario");
  }

  
  
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto"
      onClose={closeModal}
    >
      <div className="min-h-screen px-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="inline-block h-screen align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className=" text-center inline-block w-full max-w-md p-6 my-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              <b> Confirmacion </b>
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                ¿Estas seguro que quieres eliminar al usuario? {usuario.name}
              </p>
            </div>

            <div className="mt-4">
            <button
                type="button"
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-red-300 hover:bg-blue-100 text-xl text-gray-900 font-bold  rounded-xl transition duration-200"
                onClick={closeModal}
              >
               Cancelar
              </button>
              <button type="button"  className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-green-300 hover:bg-blue-100 text-xl text-gray-900 font-bold  rounded-xl transition duration-200" 
               onClick={() =>{DeleteUsuario(usuario.id); closeModal()}}>
          
              Aceptar
              </button>

              
            </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
    <tr>
      <td class="p-2 whitespace-nowrap">
        <div class="flex items-center">
          <div class="font-medium text-green-500">{usuario.nombre}</div>
        </div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left text-green-500">{usuario.correo}</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left font-medium text-green-500">
          {usuario.direccion}
        </div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-lg text-center text-green-500">{usuario.numero}</div>
      </td>
      <td class="text-center text-dark font-medium text-base py-5 px-2 bg-white">
        <button 
         onClick={() => modificarU(usuario)}
         class="border border-primary py-2 px-6 text-primary inline-block rounded hover:bg-primary hover:text-blue-500"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </td>
      <td class="text-center text-dark font-medium text-base py-5 px-2 bg-white">
        <button
        type="button"
        onClick={openModal}>
        <a
          href="javascript:void(0)"
          class="border border-primary py-2 px-6 text-primary inline-block rounded hover:bg-primary hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        </button>
      </td>
    </tr>

    </>
  );

 
};

export default Usuario;
