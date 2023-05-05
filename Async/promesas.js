let miPromesa = new Promise((resolve, reject) => {
    const expresion = true;
    if (expresion) {
        resolve([1, 2]);
    } else {
        reject('ERROR!');
    }
})

miPromesa
.then((valores) => {
    console.log(valores[0] + valores[1]);
}).catch(error => {
    console.log(error);
})

// Async indica que una funcion regresa una promesa
async function funcionPromesa(){
    return 'Saludos!';
}

funcionPromesa().then(valor => console.log(valor));
