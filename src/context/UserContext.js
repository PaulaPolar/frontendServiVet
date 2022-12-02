import React, { useState, createContext } from 'react';
import { API } from '../config';

import axios from 'axios';

const UserContext = createContext();


const UserProvider = ({ children }) => {

    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [token, setToken] = useState([]);

    const cerrarSesion = async () => {
        setToken("");
    }

    const registrarUsuario = async (nombre, correo, clave, apellidos, celular, direccion) => {

        console.log(nombre);
        console.log(correo);
        console.log(clave);
        console.log(apellidos);
        console.log(celular);
        console.log(direccion);


        return await axios({
            url: `http://localhost:9301/sesion`,
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
            console.log(result.data.data.register)

        }).catch(err => console.log(err));

    }

    const iniciarSesion = async (correo, clave) => {

        return await axios({
            url: `http://localhost:9301/sesion`,
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
            console.log(result.data.data.login)
            return result.data.data.login

        }).catch(err => console.log(err));


    }

    // const LoadUsuarios = async () => {
    //     await axios.get(`${API}/usuario/usuarios`)
    //         .then(response => setUsuarios(response.data))
    //         .catch(err => console.log(err));
    // }

    // const DeleteUsuario = async (idUser) => {
    //     await axios.delete(`${API}/usuario/remove/${idUser}`)
    //         .then(window.location.reload(true))
    //         .catch(err => console.log(err));
    // }

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

    return (
        <UserContext.Provider value={{
            // DeleteUsuario,
            // LoadUsuarios,
            // UpdateUsuario,
            // CreateUsuario,
            usuarios,
            usuario,
            setUsuario,
            registrarUsuario,
            iniciarSesion

        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;
