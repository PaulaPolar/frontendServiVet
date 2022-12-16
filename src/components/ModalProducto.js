import React, { Fragment, useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

const ModalProducto = ({ closeModal }) => {

    const { producto, isModificar, CreateProducto, UpdateProducto } = useContext(UserContext);
    const [datos, setDatos] = useState({
        id: producto.id,
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        peso: producto.peso,
        edad: producto.edad,
        precio: producto.precio,
        marca: producto.marca,
        imagen: producto.imagen
    });

    const handleInputChange = (event) => {
        //console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const [state, setState] = useState({ filepreview: null });

    function onChange(e) {
        setState({ filepreview: URL.createObjectURL(e.target.files[0]) })
    }


    const enviarDatos = (event) => {
        event.preventDefault();
        if (isModificar) {
            UpdateProducto(datos.id, datos, state.filepreview);
            closeModal();
        } else {
            CreateProducto(datos);
            closeModal();
        }
    }

    let imagen;
    let campoImagen;
    if (isModificar) {
        imagen =
            <div>
                <input autoComplete="off" type="file" accept=".png, .jpg, .jpeg" id="imagen" onChange={onChange} name="imagen" placeholder="imagen del producto"
                    class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
      text-gray-600 placeholder-gray-400
      outline-none"/>
                <div class="flex items-center mb-5">
                    <label for="imagen" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Imagen a guardar</label>
                    <img
                        src={state.filepreview}
                        alt={producto.nombre}
                        className="mb3 img-cont"
                        style={{ maxHeight: "180px", maxwidth: "300px" }} />
                </div>
                <div class="flex items-center mb-5">
                    <label for="imagen" class="inline-block w-20 mr-6 text-right 
        font-bold text-gray-600">visualizacion imagen guardada</label>
                    <div>
                        <img
                            src={require(`../img/${datos.imagen}`).default}
                            alt={producto.nombre}
                            className="mb3 img-cont"
                            style={{ maxHeight: "180px", maxwidth: "300px" }} /> </div>
                </div>
            </div>;
    } else {
        imagen = <div class="flex items-center mb-5">
            <label for="imagen" class="inline-block w-20 mr-6 text-right 
                         font-bold text-gray-600">visualizacion imagen</label>
            <img
                src={state.filepreview}
                alt={producto.nombre}
                className="mb3 img-cont"
                style={{ maxHeight: "180px", maxwidth: "300px" }} />
        </div>;
        campoImagen =
            <div class="flex items-center mb-5">
                <label for="imagen" class="inline-block w-20 mr-6 text-right 
        font-bold text-gray-600">Imagen</label>
                <input required autoComplete="off" type="file" accept=".png, .jpg, .jpeg" id="imagen" onChange={onChange} name="imagen" placeholder="imagen del producto"
                    class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
      text-gray-600 placeholder-gray-400
      outline-none"/>
            </div>;
    }



    return (
        <Fragment>
            <form onSubmit={enviarDatos}>
                <div class="flex items-center mb-5">
                    <label for="nombre" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Nombre</label>
                    <input required autoComplete="off" type="text" defaultValue={producto.nombre} onChange={handleInputChange}
                        id="nombre" name="nombre" placeholder="Nombre del producto" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-40 outline-none"/>
                </div>
                <div class="flex items-center mb-5">
                    <label for="descripcion" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Descripcion</label>
                    <textarea required autoComplete="off" defaultValue={producto.descripcion} onChange={handleInputChange} type="number" id="descripcion" name="descripcion" placeholder="Descripcion del producto"
                        class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                </div>
                <div class="flex items-center mb-5">
                    <label for="peso" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Peso</label>
                    <input required autoComplete="off" type="text" id="peso" defaultValue={producto.peso} onChange={handleInputChange} name="peso" placeholder="Peso del producto"
                        class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                </div>
                <div class="flex items-center mb-5">
                    <label for="edad" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Edad</label>
                    <input required autoComplete="off" type="text" id="edad" defaultValue={producto.edad} onChange={handleInputChange} name="edad" placeholder="Edad del producto"
                        class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                </div>
                <div class="flex items-center mb-5">
                    <label for="precio" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Precio</label>
                    <input required autoComplete="off" type="text" id="precio" defaultValue={producto.precio} onChange={handleInputChange} name="precio" placeholder="Precio del producto"
                        class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                </div>
                <div class="flex items-center mb-5">
                    <label for="marca" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Marca</label>
                    <input required autoComplete="off" type="text" id="marca" defaultValue={producto.marca} onChange={handleInputChange} name="marca" placeholder="Marca del producto"
                        class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                </div>
                {campoImagen}
                {imagen}
                {/* <button onClick={() => { irProducto() }} >oprimememe</button> */}
                <div className="mt-4">

                    <button type="submit" className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-green-300 hover:bg-blue-100 text-xl text-gray-900 font-bold  rounded-xl transition duration-200">
                        Guardar
                    </button>
                </div>
            </form>
            <button
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-red-300 hover:bg-blue-100 text-xl text-gray-900 font-bold  rounded-xl transition duration-200"
                onClick={() => closeModal()} >
                Cancelar
            </button>
        </Fragment>
    );
};

export default ModalProducto;