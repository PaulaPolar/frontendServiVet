import React, { useState } from 'react';
import { Fragment } from "react";
import "../App.css";
import MostrarImg from '../components/MostrarImg'

const Servicio = ({ servicio }) => {

    const [count, Setcount] = useState(servicio.count)

  return (
<Fragment>      
                <article class="bg-gray-500 group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                    <div class="relative w-full h-80 md:h-64 lg:h-44">
                    <MostrarImg className="img" item={servicio} />
                    </div>
                    <div class="px-3 py-4">
                        <h3 class="text-sm text-gray-500 pb-2">
                            <a class="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                                <span class="absolute inset-0"></span>
                                {servicio.nombre}
                            </a>
                        </h3>
                        <p
                            class="text-base font-semibold text-white group-hover:text-indigo-600">
                            {servicio.descripcion} </p>
                    </div>
                </article>
            
    </Fragment>
  );
};

export default Servicio;