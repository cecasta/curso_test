// My library

const esperoQue = (dato, esperado) => {
    return { 
        seaIgual: () => {
            if (dato !== esperado) {
                throw new Error(` ${dato} es distinto que ${esperado}`)   
            }
        } 
    }
}

const prueba = (titulo, funcion) => {
    try {
        funcion()
        console.log(`ok ${titulo}`);
    } catch (error) {
        console.log(`error ${titulo}`)
        console.log(error)
    }
}

module.exports = {esperoQue, prueba}