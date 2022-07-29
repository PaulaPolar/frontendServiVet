import { Fragment } from "react";
import mono from "../img/mono.jpg";
import mosca from "../img/mosca.jpg";
import lombris from "../img/mono.jpg";
import salamandra from "../img/salamandra.jpg";
import  tiburon from "../img/tiburon.jpg";
import anguila from "../img/anguila.jpg";
import bacteria from "../img/bacteria.jpg";
import ballena from "../img/ballena.jpg";
import canario from "../img/canarios.jpg";
import caracol from "../img/caracol.jpg";


import "../App.css";

const Curi = () => {
  return (
    <Fragment>
            <div class="bg-gray-100 py-14">
    <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Curiosidades.</h1>

   
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">

      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src={mono} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">El mono precoz.</h1>
            <p class="mt-4 text-gray-600">Los chimpancés poseen el récord de rapidez en el acto sexual entre los mamíferos: lo consuman en tan solo 3 segundos.</p>
          </div>
        </div>
      </div>
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src={mosca} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Con el gusto en los talones.</h1>
            <p class="mt-4 text-gray-600">Las moscas tienen 15.000 papilas gustativas repartidas por sus patas.</p>
          </div>
        </div>
      </div>
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src={anguila} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Alta tensión.</h1>
            <p class="mt-4 text-gray-600">La anguila eléctrica, Electroptiorus electricus, puede emitir una descarga de 600 voltios durante unos milisegundos.</p>
          </div>
        </div>
      </div>
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src={tiburon} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Huevos revueltos</h1>
            <p class="mt-4 text-gray-600">El tiburón, y no la avestruz, es el animal que pone los huevos más grandes, que llegan a medir 20 centímetros de largo.</p>
          </div>
        </div>
      </div>
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src={salamandra} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">¡Qué embarazo más largo!</h1>
            <p class="mt-4 text-gray-600"> La salamandra negra alpina tiene un periodo de gestación de 3 años y dos meses.</p>
          </div>
        </div>
      </div>


      
    </div>
    <div class="md:flex md:justify-center md:space-x-8 md:px-14">

      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src={lombris} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Llegar tan bajo como un gusano.</h1>
            <p class="mt-4 text-gray-600">Algunas lombrices de tierra, como la Lombricus terrestris, excava galerías de hasta seis metros de profundidad.</p>
          </div>
        </div>
      </div>
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src={bacteria} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Microbios de tungsteno.</h1>
            <p class="mt-4 text-gray-600">La bacteria Pyrococcus furiosus soporta temperaturas superiores a los 350ºC. El secreto de su resistencia al calor se explica porque posee enzimas cuyo componente principal es el tungsteno.</p>
          </div>
        </div>
      </div>
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src={caracol} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Lento, pero bien armado</h1>
            <p class="mt-4 text-gray-600">Algunas especies de caracol pueden tener hasta 25.000 dientes.</p>
          </div>
        </div>
      </div>
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src={ballena} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Sin hueso.</h1>
            <p class="mt-4 text-gray-600">La lengua de la ballena azul adulta llega a pesar cuatro toneladas.</p>
          </div>
        </div>
      </div>
      <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
        <div class="w-sm">
          <img class="w-64" src={canario} alt="" />
          <div class="mt-4 text-green-600 text-center">
            <h1 class="text-xl font-bold">Encogimiento mental.</h1>
            <p class="mt-4 text-gray-600">Los canarios pierden el 20 por 100 de su masa cerebral en invierno.</p>
          </div>
        </div>
      </div>


      
    </div>
    
  </div>
    </Fragment>
  );
};

export default Curi;