import React, { useState, createContext } from 'react';
import { API } from '../config';

import axios from 'axios';

const UserContext = createContext();


const UserProvider = ({ children }) => {

  const [token, setToken] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [productos, setProductos] = useState([]);
  const [isModificar, setIsModificar] = useState([]);
  const [producto, setProducto] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [servicio, setServicio] = useState([]);
  const [infoVeterinaria, setInfoVeterinaria] = useState([]);
  const [personal, setPersonal] = useState([]);
  const [infoPerfil, setInfoPerfil] = useState([]);


  const cerrarSesion = async () => {
    setToken("");
    localStorage.setItem('token', "");
  }

  const registrarUsuario = async (nombre, correo, clave, apellidos, celular, direccion) => {

    console.log(nombre);
    console.log(correo);
    console.log(clave);
    console.log(apellidos);
    console.log(celular);
    console.log(direccion);

    if (nombre == "") {

    } else if (correo.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {

    } else if (clave == "") {

    } else if (apellidos == "") {

    } else if (celular == "") {

    } else if (direccion == "") {

    } else {
      return await axios({
        url: "http://localhost:9301/sesion",
        method: 'post',
        data: {
          query: `
                  mutation {
                    register (
                        
                        correo: "${correo}"
                        clave: "${clave}"
                        nombres: "${nombre}"
                        apellidos: "${apellidos}"
                        numero_celular: "${celular}"
                        direccion: "${direccion}"
                        
                      )
                    }
                  `
        }
      }).then((result) => {
        setToken(result.data.data.register);
        localStorage.setItem('token', result.data.data.register);
        console.log(result)

      }).catch(err => console.log(err));

    }


  }

  const iniciarSesion = async (correo, clave) => {

    console.log(API);

    return await axios({
      url: "http://localhost:9301/sesion",
      method: 'post',
      //include a header with the token for other requests to the server
      //headers: { Authorization: `bareur ${token}` },
      data: {
        query: `
                mutation {
                    login (
                      
                      correo: "${correo}"
                      clave: "${clave}"
                   
                    )
                  }
                `
      }
    }).then((result) => {
      setToken(result.data.data.login)
      localStorage.setItem('token', result.data.data.login);
      console.log(result.data.data.login)
      return result.data.data.login

    }).catch(err => console.log(err));


  }

  const LoadUsuarios = async () => {
    setUsuarios([
      {
        nombre: "usuario 1",
        correo: "correo 1",
        direccion: 'cardiologia.jpg',
        numero: 31567652662,
        id: 1,
      },
      {
        nombre: "usuario 1",
        correo: "correo 1",
        direccion: "cardiologia.jpg",
        numero: 31567652662,
        id: 2,
      },
      {
        nombre: "usuario 1",
        correo: "correo 1",
        direccion: "cardiologia.jpg",
        numero: 31567652662,
        id: 3,
      },
      {
        nombre: "usuario 1",
        correo: "precio 1",
        direccion: "cardiologia.jpg",
        numero: 31567652662,
        id: 4,
      },
    ]);


    // await axios.get(`${API}/usuario/usuarios`)
    //     .then(response => setUsuarios(response.data))
    //     .catch(err => console.log(err));
  }

  const DeleteUsuario = async (idUser) => {
    alert("se supone que se borra el usuario " + idUser)
    //     await axios.delete(`${API}/usuario/remove/${idUser}`)
    //         .then(window.location.reload(true))
    //         .catch(err => console.log(err));
  }

  // const UpdateUsuario = async (idUser, data) => {
  //     await axios.put(`${API}/usuario/update/${idUser}`, data)
  //         .then(LoadUsuarios())
  //         .catch(err => console.log(err));
  // }

  // const CreateUsuario = async (datos) => {
  //     await axios.post(`${API}/usuario/crear`, datos)
  //         .then(LoadUsuarios())
  //         .catch(err => console.log("error al enviar datos" + err));
  // }

  const LoadProductos = async () => {
    setProductos([
      {
        id: 1,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 3,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 4,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 5,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
      {
        id: 2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"
      },
    ]);


    // await axios.get(`${API}/usuario/usuarios`)
    //     .then(response => setUsuarios(response.data))
    //     .catch(err => console.log(err));
  }

  const DeleteProducto = async (idProducto) => {
    alert("se supone que se borra el producto " + idProducto)
    //     await axios.delete(`${API}/usuario/remove/${idUser}`)
    //         .then(window.location.reload(true))
    //         .catch(err => console.log(err));
  }
  const UpdateProducto = async (idProducto, data, imagenEditada) => {
    alert("se actualiza el producto - " + idProducto + "con los datos de - " + data.nombre + " con la imagen editada " + imagenEditada)
    //     await axios.put(`${API}/usuario/update/${idUser}`, data)
    //         .then(LoadUsuarios())
    //         .catch(err => console.log(err));
  }

  const CreateProducto = async (datos) => {
    alert("se crea el producto con - " + datos.nombre)
    //     await axios.post(`${API}/usuario/crear`, datos)
    //         .then(LoadUsuarios())
    //         .catch(err => console.log("error al enviar datos" + err));
  }

  const LoadServicios = async () => {
    setServicios([
      {
        id: 1,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: 'cardiologia.jpg'
      },
      {
        id: 2,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: "cardiologia.jpg"
      },
      {
        id: 3,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: "cardiologia.jpg"
      },
      {
        id: 2,
        nombre: "servicio 1",
        descripcion: "precio 1",
        imagen: "cardiologia.jpg"
      },
      {
        id: 2,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: 'cardiologia.jpg'
      },
      {
        id: 2,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: "cardiologia.jpg"
      },
      {
        id: 2,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: "cardiologia.jpg"
      },
      {
        id: 2,
        nombre: "servicio 1",
        descripcion: "precio 1",
        imagen: "cardiologia.jpg"
      },
    ]);


    // await axios.get(`${API}/usuario/usuarios`)
    //     .then(response => setUsuarios(response.data))
    //     .catch(err => console.log(err));
  }

  const DeleteServicio = async (idServicio) => {
    alert("se supone que se borra el servicio " + idServicio)
    //     await axios.delete(`${API}/usuario/remove/${idUser}`)
    //         .then(window.location.reload(true))
    //         .catch(err => console.log(err));
  }

  const UpdateServicio = async (idServicio, data, imagenEditada) => {
    alert("se actualiza el servicio - " + idServicio + "con los datos de - " + data.nombre + " imagen --> " + imagenEditada)
    //     await axios.put(`${API}/usuario/update/${idUser}`, data)
    //         .then(LoadUsuarios())
    //         .catch(err => console.log(err));
  }

  const CreateServicio = async (datos) => {
    alert("se crea el servicio con - " + datos.nombre)
    //     await axios.post(`${API}/usuario/crear`, datos)
    //         .then(LoadUsuarios())
    //         .catch(err => console.log("error al enviar datos" + err));
  }

  const LoadInfoVeterinaria = async () => {
    setInfoVeterinaria({
      mision: "Ofrecer bienestar tanto animal, como a las familias de nuestros pacientes a través de la prestación de servicios médicos veterinarios y complementarios, entregando calidad y satisfacción, superando las expectativas de nuestros clientes, contribuyendo a la innovación y desarrollo profesional del sector Médico Veterinario de la Región.",
      vision: "Buscar la excelencia en la prevención, detección y curación de enfermedades en animales de compañía, aumentando el nivel de seguridad sanitaria en quienes conviven con ellos y hacerlo de forma sostenible, rentable, profesional y ética; así como mejorar la relación afectiva entre las mascotas y sus propietarios, generando un mayor equilibrio sanitario y emocional en ambos.",
      direccion: "calle 14 no 12",
      numero: "3145869589",
      correo: "serviVet@gmail.com",
      usuarios: [
        {
          nombre: "Sandra Cleves",
          cargo: "Veterinario General",
          imagen: 'doctor1.jpg',
          descripcion: "Realizar diagnósticos, tratamientos y prevención de las enfermedades que afectan a los animales domésticos, de experimentación, exóticos, silvestres y salvajes."
        },
        {
          nombre: "Mario Cortez",
          cargo: "Cirujano",
          imagen: "doctor2.jpg",
          descripcion: "Supervisar el buen uso de los fármacos veterinarios, así como la fiscalización del uso indiscriminado de los mismos por parte de personas, establecimientos, o entidades no idóneas para esta actividad, a la vez servir de asesores de éstas, en todo lo relacionado a los medicamentos de uso veterinario."
        },
        {
          nombre: "Andres Quintero",
          cargo: "Cirujano",
          imagen: "Bromatología y microbiología.",
          descripcion: "Supervisar el buen uso de los fármacos veterinarios, así como la fiscalización del uso indiscriminado de los mismos por parte de personas, establecimientos, o entidades no idóneas para esta actividad, a la vez servir de asesores de éstas, en todo lo relacionado a los medicamentos de uso veterinario."
        },
      ]
    });

  }
  const LoadPersonal = async () => {
    setPersonal([
        {
          nombre: "Sandra Cleves",
          cargo: "Veterinario General",
          imagen: 'doctor1.jpg',
          descripcion: "Realizar diagnósticos, tratamientos y prevención de las enfermedades que afectan a los animales domésticos, de experimentación, exóticos, silvestres y salvajes."
        },
        {
          nombre: "Mario Cortez",
          cargo: "Cirujano",
          imagen: "doctor2.jpg",
          descripcion: "Supervisar el buen uso de los fármacos veterinarios, así como la fiscalización del uso indiscriminado de los mismos por parte de personas, establecimientos, o entidades no idóneas para esta actividad, a la vez servir de asesores de éstas, en todo lo relacionado a los medicamentos de uso veterinario."
        },
        {
          nombre: "Andres Quintero",
          cargo: "Bromatología y microbiología.",
          imagen: "doctor3.jpg",
          descripcion: "Supervisar el buen uso de los fármacos veterinarios, así como la fiscalización del uso indiscriminado de los mismos por parte de personas, establecimientos, o entidades no idóneas para esta actividad, a la vez servir de asesores de éstas, en todo lo relacionado a los medicamentos de uso veterinario."
        },
      ]
    );

  }

  const LoadInfoUsuario = async () => {
    setInfoPerfil({
      nombre: "Tatiana Yiseth",
      apellidos: "vehn lopez",
      correo: "calle 14 no 12",
      numero: 3145869589,
      direccion: "Tati12t@gmail.com",
      rol: "administrador",
      pais: "Colombia"
    });

  }

  return (
    <UserContext.Provider value={{
      registrarUsuario,
      iniciarSesion,
      cerrarSesion,
      DeleteUsuario,
      LoadUsuarios,
      usuario,
      usuarios,
      setUsuario,
      DeleteProducto,
      LoadProductos,
      producto,
      productos,
      setProducto,
      UpdateProducto,
      CreateProducto,
      DeleteServicio,
      LoadServicios,
      servicio,
      servicios,
      setServicio,
      UpdateServicio,
      CreateServicio,
      setIsModificar,
      isModificar,
      LoadInfoVeterinaria,
      infoVeterinaria,
      setInfoVeterinaria,
      LoadInfoUsuario,
      infoPerfil,
      setInfoPerfil,
      LoadPersonal,
      setPersonal,
      personal
    }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;
