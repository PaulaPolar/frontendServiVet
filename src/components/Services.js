import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import "../App.css";
import Servicio from "../components/Servicio";

const Services = ({}) => {
  const [servicios, setServicios] = useState([]);
  const [error, setError] = useState(false);

  const loadServicios = () => {
    setServicios([
      {
        nombre: "producto 1",
        descripcion: "descripcion 1",
        imagen: 'cardiologia.jpg'
      },
      {
        nombre: "producto 1",
        descripcion: "descripcion 1",
        imagen: "cardiologia.jpg"
      },
      {
        nombre: "producto 1",
        descripcion: "descripcion 1",
        imagen: "cardiologia.jpg"
      },
      {
        nombre: "producto 1",
        descripcion: "precio 1",
        imagen: "cardiologia.jpg"
      },
    ]);
    // getServicios().then((data) => {
    //   if (data.error) {
    //     setError(data.error);
    //   } else {
    //     setServicios(data);
    //     console.log(data);
    //   }
    // });
  };

  useEffect(() => {
    loadServicios();
  }, []);

  return (
    <Fragment>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
        <article>
        <h2 class="text-2xl font-extrabold text-gray-900 max-w-7xl px-4 sm:px-6 lg:px-4 mt-12 mb-12">
              NUESTROS SERVICIOS
            </h2>
          <section class="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            
            {servicios.map((servicio, i) => (
              <div key={i}>
                <Servicio servicio={servicio} />
              </div>
            ))}
          </section>
        </article>
      </section>

      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Quisque</span>
		<h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
	</div>
	<p className="dark:text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
</div>
    </Fragment>
  );
};

export default Services;
