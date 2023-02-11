import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Se hace petición a la API 
function fetchData(urlApi){
    //Retorna la información de la API (Hace la petición)
    return fetch(urlApi); 
};

// Hacemos el llamado 
/* fetchData(`${API}/products`)
    // Then se usa para saber que hay en su respuesta, 
    // usamos .json() para transformar la información 
    // recibida en este formato
    .then(response => response.json())
    .then(products => {
        console.log(products);
    })
    .catch(error => console.log(error));
 */
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`
    )})
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then (category => {
        console.log(category.name)
    })
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));
