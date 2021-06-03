/**
 * Ejemplo mas basico de un test en javascript. Para este caso, debe fallar
 */

const resultado = 1
const esperado = 2

if (resultado !== esperado){
    throw new Error(`${resultado} es distinto de ${esperado}`)
}

console.log("Todo esta OK")