import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./test/retiro_banco.feature');

const cuenta = require("../cuenta");

defineFeature(feature, test => {
    test('Retirar una cantidad menor al saldo', ({ given, when, then }) => {

        let resultado_retiro;
        let valor_a_retirar;

        given('El saldo es mayor a la cantidad a retirar', () => {
            cuenta.saldo = 100000;
            valor_a_retirar = 30000;
        });

        when('Yo retiro esa cantidad', () => {
            resultado_retiro = cuenta.retirar(valor_a_retirar);
        });

        then('Yo recibo el dinero', () => {
            expect(resultado_retiro).toBe(true);
        });

    });
});
