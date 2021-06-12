Feature: Retirar dinero

Scenario: Retirar una cantidad menor al saldo
    Given El saldo es mayor a la cantidad a retirar
    When Yo retiro esa cantidad
    Then Yo recibo el dinero