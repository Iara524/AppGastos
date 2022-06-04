# AppGastos

CONSIGNA DE SPRINT 2
Al Product Owner le pareció una buena idea que tomemos todo lo que aprendimos
para volcarlo en un proyecto menor que tenga una utilidad práctica.
Él se reúne seguido con sus amigos y cada uno lleva siempre algo, pero les gusta
ser justos con el reparto de gastos por lo que nos pide una web donde poder
ingresar cuánto gastó cada uno, que sume todo y lo divida entre todos lo que fueron
para saber cuánto debe pagar cada uno.
Quiere que usemos Bootstrap, input de formularios en lugar de prompt(), y que se
calcule todo cada vez que ingresa un gasto.

-------------------------------------------------------------------------------------
Se utilizaron las tecnologias HTML,Bootstrap y Javascript.
Se hizo un formulario con Bootstrap y se llamo a dos Eventos Click que se le colocó al botón del formulario desde Javascript. Luego se asocio el evento a varias funciones la primera una verificacón que si el usuario ingreso datos se crea un objeto con la lista con los mismos adentro y sino sale un mensaje que se encuentra en un div dentro del formulario html pidiendo que se ingresen.Después,se crea una función y se llama a los valores ingresados en el formulario. Y por último,una función que imprime los valores en el html, con un for dentro de la misma que realiza la suma y luego lo divide por la cantidad de valores ingresados. 
