import { API } from '../config';

export const getProductos = () => {
    return fetch(`${API}/producto/productos`,{method: 'GET'})
        .then(response => {
            console.log(response)
            return response.json()
        }).catch(err => console.log(err));
}

export const getCategorias = () => {
    return fetch(`${API}/categoria/categorias`,{ method: 'GET'})
        .then(response => {
            console.log(response)
            return response.json()
        }).catch(err => console.log(err));
}


export const getServicios = () => {
    return fetch(`${API}/servicio/servicios`, { method: 'GET' })
        .then(response => {
            console.log(response)
            return response.json()
        }).catch(err => console.log(err));
}
