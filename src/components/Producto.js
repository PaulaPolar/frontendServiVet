import React, { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import MostrarImg from '../components/MostrarImg'
import { Link, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import ModalProducto from "./ModalProducto";
import "../App.css";


const Producto = ({ producto }) => {

  const { DeleteProducto, setProducto, setIsModificar, UpdateProducto } = useContext(UserContext);
  const history = useHistory();
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenEditar, setIsOpenEditar] = useState(false

  );
  const [datos, setDatos] = useState({
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    peso: producto.peso,
    edad: producto.edad,
    precio: producto.precio,
    marca: producto.marca,
    imagen: producto.imagen
  });


  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModalEditar() {
    setIsOpenEditar(false);
  }

  function openModalEditar() {
    setIsOpenEditar(true);
  }

  function modificarP(product, isModificar) {
    setIsModificar(isModificar);
    setProducto(product);
  }

  return (
    <Fragment>
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
                    <b>¿</b> Estas seguro que quieres eliminar el producto : <b>{producto.nombre}</b> <b>?</b>
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
                  <button type="button" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-green-300 hover:bg-blue-100 text-xl text-gray-900 font-bold  rounded-xl transition duration-200"
                    onClick={() => { DeleteProducto(producto.id); closeModal() }}>
                    Aceptar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isOpenEditar} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModalEditar}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200"
              leaveFrom="opacity-100" leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span className="" aria-hidden="true" >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <div className=" text-center inline-block w-full max-w-2xl p-6 my-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div class="bg-green-200 py-10 px-5 min-h-screen ">
                  <div class="bg-white p-10 md:w-3/4 mx-auto">
                    <ModalProducto closeModal={closeModalEditar} />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div class="relative max-w-sm min-w-[340px] bg-gray-300 shadow-md rounded-3xl p-3 mx-1 my-3 cursor-pointer">
        <div class="overflow-x-hidden rounded-2xl relative">
          <MostrarImg className="img" item={producto} />
          <p class="absolute right-2 top-2  rounded-full p-2 cursor-pointer group ">
            <button onClick={() => { modificarP(producto, true); openModalEditar() }}
              class="border bg-green-100 rounded-full border-primary py-2 px-4 text-primary inline-block rounded hover:bg-primary hover:text-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd" />
              </svg>
            </button>
            <button type="button" onClick={openModal} class="border bg-red-100 rounded-full border-primary py-2 px-4 m-1 text-primary inline-block rounded hover:bg-primary hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </p>
        </div>
        <div class="mt-4 pl-2 mb-2  justify-between ">
          <div>
            <p class="text-lg font-semibold text-gray-900 mb-0">
              {producto.nombre} este producto es
            </p>
            <p class="text-md text-gray-800 mt-0">${producto.precio} este producto </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Producto;