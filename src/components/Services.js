import React, { useEffect, Fragment, useContext  } from "react";
import Servicio from "../components/Servicio";
import Wpp from "../components/Wpp";
import UserContext from "../context/UserContext";

const Services = ({ }) => {
  const { LoadServicios, servicios } = useContext(UserContext);

  useEffect(() => {
    LoadServicios();
  }, []);

  return (
    <Fragment>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
          <header class="text-center">
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              Nuestros servicios
            </h2>
            <p class="max-w-md mx-auto mt-4 text-gray-500">
              Navega por los diferentes servicios que te ofrecemos en nuestra pagina web,
              para que puedas solicitar mas informacion por nuestro wahtsapp!.
            </p>
          </header>
          <div class="w-full max-w-2xl mx-auto  flex ">
          <button class="flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 0 24 24" width="24"><path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" /><path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" /></svg>
            Agregar
          </button>
        </div>
          <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 ">
            {servicios.map((servicio, i) => (
              <div key={i}>
                <Servicio servicio={servicio} />
              </div>
            ))}
          </section>
      </section>
      <Wpp />
    </Fragment>
  );
};

export default Services;
