# Ejemplo Given_When_Then

Feature: Generar Radicado
	Como usuario con el rol radicador, quiero generar un radicado en el sistema de información.
	
	Backgroud:
		Given un navegador web en el sistema de información.
		
	Scenario: Generar radicado
		Given dado que el usuario diligencio el formulario
		When se pulsa el boton radicar
		Then mostrar el numero radicado en pantalla