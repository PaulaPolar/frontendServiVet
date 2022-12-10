import React, { useState, useContext, Fragment } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import MostrarImg from '../components/MostrarImg';
import UserContext from "../context/UserContext";


const Servicio = ({ servicio }) => {

    const { DeleteServicio, setServicio } = useContext(UserContext);
    const history = useHistory();
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    function modificarP(servicio) {
        setServicio(servicio);
        history.push("/modificarUsuario");
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
                                        <b>¿</b> Estas seguro que quieres eliminar el servicio : <b>{servicio.nombre}</b> <b>?</b>
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
                                        onClick={() => { DeleteServicio(servicio.id); closeModal() }}>
                                        Aceptar
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
            <div class="bg-gray-500 group relative rounded-lg overflow-hidden shadow-lg">
                <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <MostrarImg className="img" item={servicio} />
                    <p class="absolute right-2 top-2  rounded-full p-2 cursor-pointer group ">
                        <button
                            class="border rounded-full bg-green-100 border-primary py-2 px-4 text-primary inline-block rounded hover:bg-primary hover:text-blue-500"
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
                        <button type="button" onClick={openModal} class="border bg-red-100 rounded-full border-primary py-2 px-4 m-1 text-primary inline-block rounded hover:bg-primary hover:text-red-500">
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
                        </button>
                    </p>
                </div>
                <div class="px-3 py-4">
                    <h3 class="text-sm text-gray-500 pb-2">
                        <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg">
                            {servicio.nombre}
                        </a>
                    </h3>
                    <p class="text-base font-semibold text-white">
                        {servicio.descripcion} </p>
                </div>
            </div>
        </Fragment>
    );
};

export default Servicio;