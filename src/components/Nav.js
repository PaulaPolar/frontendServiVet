import { Fragment, useEffect } from "react";
import Logo from "../img/iconmonstr-cat-5-240.png";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import "../App.css";

const Titulo = styled.h5`
  font-size: 6vw;
  line-height: 5vw;
  margin: 0vw 0vw 0vw 2vw;
`;

const Nav = () => {
  useEffect(() => {
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (var y = 0; y < close.length; y++) {
        close[y].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var k = 0; k < backdrop.length; k++) {
        backdrop[k].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  }, []);

  return (
    <Fragment>
      <nav className="barra relative py-4 flex justify-between">
        <div className="flex flex-row ml-4 ">
          <div className="my-auto">
            <a className="text-3xl font-bold leading-none" href="/Home">
              <img className="h-16" src={Logo} alt="page logo" />
            </a>
          </div>
          <div className="mt-8">
            <Titulo>ServiVet</Titulo>
          </div>
        </div>

        <div className="lg:hidden flex items-center ">
          <button className="navbar-burger flex items-end text-blue-600 p-3">
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-end px-4">
          {/* padre del inicio de seccion y los link de los otros productos */}
          <div className="mt-6 mb-4 ">
            <Link
              className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-pink-400 hover:bg-pink-900 text-xl text-gray-900 font-bold  rounded-xl transition duration-200"
              href="/#"
              to="/login"
            >
              Iniciar sesion
            </Link>

            <Link
              className="hidden lg:inline-block py-2 px-6 bg-green-400 hover:bg-green-900 text-xl text-white font-bold rounded-xl transition duration-200"
              href="/#"
              to="/registro"
            >
              Registrarse
            </Link>
            {/* <a href="#" class="flex  font-medium text-gray-100 hover:text-green-400 p-2 rounded-lg hover:bg-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" class="mr-3 h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>

              Cerrar sesion
            </a> */}
          </div>
          <div className="">
            <ul className="hidden transform translate-y-2  lg:content-end lg:flex lg:items-center lg:w-auto px-4">
              <li>
                <Link
                  to="/home"
                  className="font-bold text-3xl text-green-400  hover:text-white"
                  href="/#"
                >
                  Inicio
                </Link>
              </li>
              <li className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5  current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <Link
                  to="/productos"
                  className="font-bold text-3xl text-white focus:text-green-400 hover:text-green-400 "
                  href="/#"
                >
                  Productos
                </Link>
              </li>
              <li className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5  current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <Link
                  className="font-bold text-3xl text-white hover:text-green-400"
                  href="/#"
                  to="/Conocenos"
                >
                  Conocenos
                </Link>
              </li>
              <li className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5  current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <Link
                  className="font-bold text-3xl text-white hover:text-green-400"
                  href="/#"
                  to="/citas"
                >
                  Citas
                </Link>
              </li>
              <li className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <Link
                  className="font-bold text-3xl text-white hover:text-green-400"
                  href="/#"
                  to="/servicios"
                >
                  Servicios
                </Link>
              </li>
              <li className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <Link
                  className="font-bold text-3xl text-white hover:text-green-400"
                  href="/#"
                  to="/users"
                >
                  Usuarios
                </Link>
              </li>
              <li className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <Link
                  className="font-bold text-3xl text-white hover:text-green-400"
                  href="/#"
                  to="/perfil"
                >
                  Perfil
                </Link>
              </li>
              <li className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 current-fill"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </li>
              <li>
                <Link
                  className="font-bold text-3xl text-white hover:text-green-400"
                  href="/#"
                  to="/Documentacion"
                >
                  Docs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* responsive */}
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-90"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-glass border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="/#">
              <img className="h-10" src={Logo} alt="page logo" />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-green-400 hover:bg-gray-500 hover:text-white rounded"
                  href="/#"
                  to="/cryptocurrency"
                >
                  Inicio
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-white hover:bg-gray-500 hover:text-green-400 rounded"
                  href="/#"
                  to="/Sale"
                >
                  Productos
                </Link>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-white hover:bg-gray-500 hover:text-green-400 rounded"
                  href="/#"
                >
                  Conocenos
                </a>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-white hover:bg-gray-500 hover:text-green-400 rounded"
                  href="/#"
                  to="/NFT"
                >
                  Calendario
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-white hover:bg-gray-500 hover:text-green-400 rounded"
                  href="/#"
                  to="/NFT"
                >
                  Servicios
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-white hover:bg-gray-500 hover:text-green-400 rounded"
                  href="/#"
                  to="/NFT"
                >
                  Perfil
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  className="block p-4 text-sm font-semibold text-white hover:bg-gray-500 hover:text-green-400 rounded"
                  href="/#"
                  to="/NFT"
                >
                  Docs
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-red-200 hover:bg-red-700 rounded-xl"
                href="/#"
              >
                Iniciar sesion
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-black font-semibold bg-green-200 hover:bg-green-700  rounded-xl"
                href="/#"
              >
                Registrarse
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright veterinaria ©2021</span>
            </p>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Nav;
