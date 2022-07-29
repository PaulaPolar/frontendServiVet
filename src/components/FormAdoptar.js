import { Fragment } from "react";
import { Link } from "react-router-dom";

import "../App.css";

const FormAdoptar = () => {
  return (
    <Fragment>
      <div class="bg-gray-200 py-32 px-10 min-h-screen ">
        <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
          {/* <form action=""> */}

          <div class="flex items-center mb-5">
            <label
              for="name"
              class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Razon para adoptar
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="¿por que quieres adoptar?"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            ></input>
          </div>

          <div class="flex items-center mb-5">
            <label
              for="name"
              class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre completo"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            ></input>
          </div>

          <div class="flex items-center mb-5">
            <label
              for="number"
              class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
             Numero telefonico
            </label>
            <input
              type="number"
              id="number"
              name="numero"
              placeholder="Numero telefonico"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            ></input>
          </div>



          <div class="flex items-center mb-5">
            <label
              for="number"
              class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Foto tuya
            </label>
            <input
              type="file"
              id="file"
              name="file"
              placeholder="file"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            ></input>
          </div>

          <div class="flex items-center mb-5">
            <label
              for="number"
              class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Fecha libre
            </label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="date"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            ></input>
          </div>


          <div class="flex items-center mb-5">
            <label
              for="number"
              class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              placeholder="time"
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            ></input>
          </div>

          

          <div class="flex items-center mb-5">
            <label
              for="number"
              class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Quieres adoptar
            </label>
            <select
              class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            >
              <option>Gato</option>
              <option>Perro</option>
              <option>Hanster</option>
              <option>Pajaro</option>
            </select>
          </div>

          <div class="text-right">
            <button class="py-3 px-8 bg-green-400 text-white font-bold">
              Adoptar
            </button>
          </div>

          {/* </form> */}
        </div>
      </div>
    </Fragment>
  );
};

export default FormAdoptar;
