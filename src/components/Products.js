import React, { useContext, useEffect, Fragment  } from "react";
import Producto from "../components/Producto";
import UserContext from "../context/UserContext";
import Wpp from "../components/Wpp"
import "../App.css";

const Products = ({ }) => {

  const { LoadProductos, productos } = useContext(UserContext);

  useEffect(() => {
    LoadProductos();
  }, []);

  return (
    <Fragment>
      <div class="min-h-screen  flex flex-col justify-center">
        <p class="text-2xl font-extrabold text-gray-900 max-w-7xl px-4 sm:px-6 lg:px-4 mt-12 mb-1 ml-12">
          <header class="text-center">
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              Nuestros productos
            </h2>
            <p class="max-w-md mx-auto mt-4 text-gray-500">
              Navega por los diferentes productos que te ofrecemos en nuestra pagina web,
              para que puedas solicitar mas informacion por nuestro wahtsapp!.
            </p>
          </header>
        </p>
        <div class="w-full max-w-2xl mx-auto  flex ">
          <button class="flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" /><path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" /></svg>
            Agregar
          </button>
        </div>
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

