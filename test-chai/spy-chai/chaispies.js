const chai = require('chai');
const { returns } = require('chai-spies');
const spies = require('chai-spies');

chai.use(spies);

const should = chai.should()
    , expect = chai.expect;

/**
 *yo como @rol usuario de primaria @iwant deseo calcular la suma de 2 números @soThat para tener el resultado 
 * debido a que no aprendí a sumar
 *
*/

/**
 *@given dado el usuario de primaria quiere de nuevo desarrollo @when cuando el ingrese al curso @then debido a que tiene limitaciones de aprendizaje
 * 
*/


//definimos comportamiento del test
describe('yo como usuario de primaria deseo calcular la suma de 2 números', () => {
    //definimos el primer paso para ejecurtar el comportamiento

    xit('prueba mock metodos encadenados', async () => {
        const mat = {
            suma: (a, b) => {
                return {
                    suma2: {
                        suma3: {
                            suma4: async () => a + b
                        }
                    }
                }
            }
        }

        chai.spy.on(mat, 'suma', returns => ({
            suma2: {
                suma3: {
                    suma4: () => 5
                }
            }
        }));

        const suma = async () => {
            const result = await mat.suma(1, 2).suma2.suma3.suma4();

            return result;
        }

        const result = await suma();


        expect(result).to.be.equal(5);
    })

    xit("se suman los valores de 2 + 3 y se espera un valor de 5", async () => {

        const mat = {
            suma: (a, b) => a + b,
            sumaAsync: async (a, b) => {
                return a + b;
            }
        }

        chai.spy.on(mat, 'suma', returns => 5);

        chai.spy.on(mat, 'sumaAsync', returns => 5);

        const suma = () => {
            const result = mat.suma(1, 2);

            return result;
        }

        const sumaAsync = async () => {
            const result = await mat.sumaAsync(1, 2);

            return result;
        }

        const result = suma();

        const resultAsync = await sumaAsync();

        expect(result).to.be.equal(5);
        expect(resultAsync).to.be.equal(5);
    })
})