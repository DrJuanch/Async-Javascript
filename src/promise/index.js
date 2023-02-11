// Recibe dos parametros (resolve y reject) resolve = salida con exito o hacer una validación y si hay error mostralo con reject
const promise = new Promise(function(resolve, reject){
    resolve('Hey!');
});

const cows = 9;

const countCows = new Promise(function(resolve, reject){
    if (cows > 10){
        resolve(`We have ${cows} that are enogh to do that!`)
    } else{
        reject("We can't do that")
    };
});


countCows.then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() => console.log('finally'));

