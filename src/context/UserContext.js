import React, {useState, createContext} from 'react';
import { API } from '../config';

import axios from 'axios';

const UserContext = createContext() ;

const UserProvider = ({children}) => {
    
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState([]);

    const LoadUsuarios = async () => { 
        await axios.get( `${API}/usuario/usuarios`)
            .then(response => setUsuarios(response.data))
            .catch(err => console.log(err));
    } 
   
    const  DeleteUsuario = async (idUser) => {
        await axios.delete(`${API}/usuario/remove/${idUser}`)
            .then(window.location.reload(true))
            .catch(err => console.log(err));
    }

    const  UpdateUsuario = async (idUser, data) => {
        await axios.put(`${API}/usuario/update/${idUser}`, data)
            .then( LoadUsuarios())
            .catch(err => console.log(err));
    }

    const  CreateUsuario = async (datos) => {
        await axios.post(`${API}/usuario/crear`, datos)
            .then(LoadUsuarios())
            .catch(err => console.log("error al enviar datos" + err));
    }
    
    return (
        <UserContext.Provider value = {{ 
            DeleteUsuario,
            LoadUsuarios, 
            UpdateUsuario,
            CreateUsuario,
            usuarios, 
            usuario, 
            setUsuario,
         }}>
        {children}
        </UserContext.Provider>
    )
}

export {UserProvider};
export default UserContext;
