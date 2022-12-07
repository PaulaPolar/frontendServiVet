import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import Producto from "../components/Producto";


import "../App.css";

const Products = ({ }) => {

  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);

  const loadProductos = () => {
    setProductos([
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
      {
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg"
      },
    ]);
    // getProductos().then((data) => {
    //   if (data.error) {
    //     setError(data.error);
    //   } else {
    //     setProductos(data);
    //     console.log(data);
    //   }
    // }
    //);
  };

  useEffect(() => {
    loadProductos();
  }, []);

  return (
    <Fragment>

      <div class="min-h-screen bg-gray-100 flex flex-col justify-center">
        <p class="text-2xl font-extrabold text-gray-900 max-w-7xl px-4 sm:px-6 lg:px-4 mt-12 mb-1 ml-12">
          NUESTROS PRODUCTOS
        </p>
        <div class="relative m-3 flex flex-wrap mx-auto justify-center">
          {productos.map((producto, i) => (
            <div key={i}>
              <Producto producto={producto} />
            </div>
          ))}
        </div>
      </div>

      <div class="relative w-16 h-16">
        <img class="rounded-full border border-gray-100 shadow-sm" src={require(`../img/bacteria.jpg`).default} alt="user image" />
        <div class="absolute top-0 right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
      </div>

      <div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
        <img src={require(`../img/bacteria.jpg`).default} alt="user image" />
        <div class="w-3/1 bg-cover bg-landscape">

        </div>
        <div class="w-2/3 p-4">
          <h1 class="text-2xl font-bold text-gray-900">
            Tomorow
          </h1>
          <p class="mt-2 text-sm text-gray-600">
            You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
          </p>
          <div class="flex justify-between mt-3 item-center">
            <h1 class="text-xl font-bold text-gray-700">
              $220
            </h1>
          </div>
        </div>
      </div>
    </Fragment>


  );
};

export default Products;

