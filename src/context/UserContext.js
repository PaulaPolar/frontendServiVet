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
        id:1,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:3,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:4,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:5,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",  
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca"      
      },
      {
        id:2,
        nombre: "producto 1",
        precio: "precio 1",
        imagen: "ballena.jpg",
        descripcion: "producto.descripcion",
        peso: "producto.peso",
        edad: "producto.edad",
        marca: "producto.marca" 
      },
      {
        id:2,
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
      alert("se actualiza el producto - "+ idProducto+ "con los datos de - "+ data.nombre +" con la imagen editada "+imagenEditada)
  //     await axios.put(`${API}/usuario/update/${idUser}`, data)
  //         .then(LoadUsuarios())
  //         .catch(err => console.log(err));
   }

   const CreateProducto = async (datos) => {
    alert("se crea el producto con - "+datos.nombre)
  //     await axios.post(`${API}/usuario/crear`, datos)
  //         .then(LoadUsuarios())
  //         .catch(err => console.log("error al enviar datos" + err));
   }

  const LoadServicios = async () => {
    setServicios([
      {
        id:1,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: 'cardiologia.jpg'
      },
      {
        id:2,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: "cardiologia.jpg"
      },
      {
        id:3,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: "cardiologia.jpg"
      },
      {
        id:2,
        nombre: "servicio 1",
        descripcion: "precio 1",
        imagen: "cardiologia.jpg"
      },
      {
        id:2,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: 'cardiologia.jpg'
      },
      {
        id:2,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: "cardiologia.jpg"
      },
      {
        id:2,
        nombre: "servicio 1",
        descripcion: "descripcion 1",
        imagen: "cardiologia.jpg"
      },
      {
        id:2,
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
    alert("se actualiza el servicio - "+ idServicio+ "con los datos de - "+ data.nombre+ " imagen --> "+imagenEditada)
  //     await axios.put(`${API}/usuario/update/${idUser}`, data)
  //         .then(LoadUsuarios())
  //         .catch(err => console.log(err));
   }

   const CreateServicio = async (datos) => {
    alert("se crea el servicio con - "+ datos.nombre)
  //     await axios.post(`${API}/usuario/crear`, datos)
  //         .then(LoadUsuarios())
  //         .catch(err => console.log("error al enviar datos" + err));
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
      
    }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider };
export default UserContext;
