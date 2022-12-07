import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../img/a1.jpeg";
import img2 from "../img/a2.jpeg";
import img3 from "../img/a3.jpeg";
import img4 from "../img/a4.jpeg";
import img5 from "../img/a5.jpeg";
import img6 from "../img/a6.jpeg";
import img7 from "../img/a7.jpeg";
import img8 from "../img/a8.jpeg";
import img9 from "../img/a9.jpeg";
import img10 from "../img/a10.jpeg";
import img11 from "../img/a11.jpeg";
import img12 from "../img/a12.jpeg";
import img13 from "../img/a13.jpeg";
import img14 from "../img/a14.jpeg";
import img15 from "../img/a15.jpeg";
import img16 from "../img/a16.jpeg";

export default function Card() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header class="text-center">
            <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
              Nuestras secciones!
            </h2>

            <p class="max-w-md mx-auto mt-4 text-gray-500">
              Navega por los diferentes servicios que te ofrecemos en nuestra pagina web, 
              para que puedas hacer uso de ellas o informarte sobre nuestra clinica.
            </p>
          </header>

          <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <a href="/productos" class="relative block group">
                <img
                 src={require(`../img/productos.jpg`).default}
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div
                  class="absolute inset-0 flex flex-col items-start justify-end p-6"
                >
                  <h3 class="text-xl font-medium text-black">Productos disponibles! </h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Visitar ahora
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href="/servicios" class="relative block group">
                <img
                   src={require(`../img/servicios.jpg`).default}
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div
                  class="absolute inset-0 flex flex-col items-start justify-end p-6"
                >
                  <h3 class="text-xl font-medium text-black">Servicios disponibles! </h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Visitar ahora
                  </span>
                </div>
              </a>
            </li>

            <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <a href="#" class="relative block group">
                <img
                   src={require(`../img/citas.png`).default}
                  alt=""
                  class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />

                <div
                  class="absolute inset-0 flex flex-col items-start justify-end p-6"
                >
                  <h3 class="text-xl font-medium text-black">Programate una cita con nosotros!</h3>

                  <span
                    class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Visitar ahora
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
