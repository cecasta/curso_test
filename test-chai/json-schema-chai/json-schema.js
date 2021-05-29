const chai = require('chai');

chai.use(require('chai-json-schema'));
const expect = chai.expect
    , assert = chai.assert;


const fruitSchema = {
    title: 'fresh fruit schema v1',
    type: 'object',
    required: ['skin', 'colors', 'taste'],
    properties: {
        colors: {
        type: 'array',
        minItems: 1,
        uniqueItems: true,
        items: {
            type: 'string'
        }
        },
        skin: {
        type: 'string'
        },
        taste: {
        type: 'number',
        minimum: 5
        }
    }

};





//definimos comportamiento del test
describe('yo como usuario quiero validar la respuesta de una API', () => {
    
    xit("puedo validar el objeto goodApple con el schema fruitSchema", () => {
        const goodApple = {
            skin: 'thin',
            colors: ['red', 'green', 'yellow'],
            taste: 10
          };
        //bdd style
        expect(goodApple).to.be.jsonSchema(fruitSchema);
        
        goodApple.should.be.jsonSchema(fruitSchema);
        
        //tdd style
        assert.jsonSchema(goodApple, fruitSchema);
    });

    xit("puedo validar el objeto badApple con el schema fruitSchema", () => {
        const badApple = {
            colors: ['brown'],
            taste: 0,
            worms: 2
        };
        //bdd style
        expect(badApple).to.not.be.jsonSchema(fruitSchema);      
        badApple.should.not.be.jsonSchema(fruitSchema);
        
        //tdd style
        assert.notJsonSchema(badApple, fruitSchema);
    });

});