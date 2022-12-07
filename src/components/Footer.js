import React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Gato } from "../img/iconmonstr-cat-7.svg";
import { ReactComponent as Wpp } from "../img/social_media_logo_whatsapp_icon-icons.svg";
import "../App.css";

const Footer = () => {
  return (
    <Fragment>
      <div class="">
        <footer class="barra body-font ">
          <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <Gato />
                <span class="ml-3 text-xl text-white">
                  Clínica Veterinaria ServiVet.
                </span>
              </a>
              <p class="mt-2 text-sm text-white">
                Numero: 3124567865 <br />
                Direccion: Calle 1 #53b-29 riojara
              </p>
            </div>
            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">
                  AYUDA
                </h2>
                <hr className="border-gray-400 border-1 w-full rounded-md"></hr>
                <nav class="list-none mb-10">
                  <li>
                    <Link
                      className="text-white hover:text-red-300"
                      href="/#"
                      to="/documentacion"
                    >
                      Docs
                    </Link>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">
                  CUENTA
                </h2>
                <hr className="border-gray-400 border-1 w-full rounded-md"></hr>
                <nav class="list-none mb-10">
                  <li>
                    <Link
                      className="text-white hover:text-red-300"
                      href="/#"
                      to="/login"
                    >
                      Ingresar
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-red-300"
                      href="/#"
                      to="/registro"
                    >
                      Registrarse
                    </Link>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-bold text-white tracking-widest text-md mb-3">
                  MENSAGES
                </h2>
                <hr className="border-gray-400 border-1 w-full rounded-md"></hr>
                <nav class="list-none mb-10">
                  <li>
                    <Link
                      className="text-white hover:text-red-300"
                      href="/#"
                      to="/conocenos"
                    >
                      Conocenos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-red-300"
                      href="/#"
                      to="/productos"
                    >
                      Nuestros productos
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:text-red-300"
                      href="/#"
                      to="/servicios"
                    >
                      Nuestros servicios
                    </Link>
                  </li>
                </nav>
              </div>
              *
            </div>
          </div>
          <hr className="border-gray-400 border-1 w-full rounded-md"></hr>
          <div class="bar">
            <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p class="text-white text-sm text-center sm:text-left">
                Todos los derecho reservados &reg; {new Date().getFullYear()}-
                <a
                  href="https://twitter.com/dogfans4"
                  rel="noopener noreferrer"
                  class="text-gray-400 ml-1"
                  target="_blank"
                >
                  @Veterinaria
                </a>
              </p>
              <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a
                  href="https://es-la.facebook.com/ClinicaVeterinariaGatican/"
                  class="text-gray-200"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/dogfans4"
                  class="ml-3 text-gray-200"
                >
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/veterinariaelcountry/?hl=es-la"
                  class="ml-3 text-gray-200"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  href="https://www.whatsapp.com/?lang=es"
                  class="ml-3 text-gray-200"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <Wpp />
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Footer;
