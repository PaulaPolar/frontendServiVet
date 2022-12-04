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
        imagen: "animal2.png"
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
        <div class="relative m-3 flex flex-wrap mx-auto justify-center">

          {productos.map((producto, i) => (
            <div key={i}>
              <Producto producto={producto} />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
