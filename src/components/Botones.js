import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import "../App.css";


const Botones = () => {
  return (
   
        <div className="relative ml-20 mr-20  ">
            <Link
              className="bot lg:inline-block lg:ml-auto lg:mr-3 py-6 px-12 bg-gray-50 hover:bg-red-200 text-3xl text-white font-bold  rounded-xl transition duration-200"
              href="/#"
              to="/Sabiasque"
            >
              Sabias que...?
            </Link>

            <Link
              className=" float-right bot lg:inline-block py-6 px-12 bg-blue-500 hover:bg-red-200 text-3xl text-white font-bold rounded-xl transition duration-200"
              href="/#"
              to="/pacientes"
            >
              Nuestros pacientes
            </Link>
          </div>

          
   
  );
};

export default Botones;
