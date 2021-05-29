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

const goodApple = {
    skin: 'thin',
    colors: ['red', 'green', 'yellow'],
    taste: 10
  };
const badApple = {
    colors: ['brown'],
    taste: 0,
    worms: 2
};


//definimos comportamiento del test
describe('yo como usuario quiero validar la respuesta de una API', () => {
    
    it("puedo validar el objeto goodApple con el schema fruitSchema", () => {
        //bdd style
        expect(goodApple).to.be.jsonSchema(fruitSchema);
        
        goodApple.should.be.jsonSchema(fruitSchema);
        
        //tdd style
        assert.jsonSchema(goodApple, fruitSchema);
    });

    it("puedo validar el objeto badApple con el schema fruitSchema", () => {
        //bdd style
        expect(badApple).to.not.be.jsonSchema(fruitSchema);      
        badApple.should.not.be.jsonSchema(fruitSchema);
        
        //tdd style
        assert.notJsonSchema(badApple, fruitSchema);
    });

});