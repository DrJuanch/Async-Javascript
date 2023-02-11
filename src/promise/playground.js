function delay (time, message){
    time = 2000;
    message = hello;
    const promise = new Promise(function(resolve, reject){
        if (time === 2000 || time === 3000){
            resolve(message);
        } else{
            reject(message)
        };
    });
    return (promise);
}

function delaySolution(time, message){
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(message);
        }, time)
    })
}