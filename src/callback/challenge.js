const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';


// Creamos función que recibe URL API y el callback (función que recibe lo que nos envia la API) 
function fetchData(urlApi, callback){
    // Construimos llamado 
    let xhttp = new XMLHttpRequest();

    // abrimos conexión a la API y le damos estos argumentos (Metodo, URL que utilizara, true or false para activarlo o desactivarlo respectivamente)
    xhttp.open('GET', urlApi, true);

    // Escucha diferentes estados que tiene la solicitud es un recurso del paquete XMLhttpRequest y saber cuando esta disponible la info
    xhttp.onreadystatechange = function(event){
        /*  ESTADOS DE READYSTATE:
            0 No se ha inicializado
            1 loading cargando
            2 send Se ejecutó
            3 Interactuando (trabajando con la solicitud)
            4 Completada la info (el llamado) */
        if (xhttp.readyState === 4){
            if(xhttp.status === 200){//Verificamos el estado de la petición
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error ('Error' + urlApi);
                return callback(error, null);
            };  
        };
    }
    xhttp.send();
}

//Hacemos el callback mediante una función anónima

fetchData(`${API}/products`, function (error1, data1){
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[1].id}`, function(error2, data2){
        if (error2) return console.error(error2);
        fetchData(`${API}/categories/${data2.category.id}`, function(error3, data3){
            if (error3) return console.error(error3);
            console.log(data1[1]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});