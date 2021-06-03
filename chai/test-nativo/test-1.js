// testing Funciones Matematicas

const { suma, resta} = require('../funcionesMatematicas')

let resultado, esperado

// probara suma (2+3)

resultado = suma (2, 3)
esperado = 5

if (resultado !== esperado){
    throw new Error(`${resultado} es distinto de ${esperado}`)
}

// probara resta(8-3)
resultado = resta (8, 3)
esperado = 5

if (resultado !== esperado){
    throw new Error(`${resultado} es distinto de ${esperado}`)
}


console.log("Test OK");