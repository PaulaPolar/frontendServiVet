import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import Producto from "../components/Producto";
import Wpp from "../components/Wpp"



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
      
      
      <Wpp />
    </Fragment>


  );
};

export default Products;

