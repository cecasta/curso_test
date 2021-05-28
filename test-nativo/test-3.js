const { suma, resta} = require('../funcionesMatematicas')
const { esperoQue } = require('./funciones/funcionesTesting')

let resultado, esperado

resultado = suma(2, 3)
esperado = 5,

//expect(resultado)toBe(esperado)
//should(resultado)
esperoQue(resultado, esperado).seaIgual(esperado)

console.log("todo OK")