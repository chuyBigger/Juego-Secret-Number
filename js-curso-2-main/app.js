// Desafíos
//1 Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
//2 Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
//3 Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
//4 Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
// Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
//5 Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
//6 Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta

let title = document.querySelector('h1')
title.innerHTML='Hora del Desafío';

function pushButom(){
    alert('Le Diste click al boton!!!')
}
let ciudad = '';
function pushPrompt(){
    ciudad = prompt('Cual es la ciudad de Brasi ?')
    alert(`Estuve en ${ciudad} y me acordé de ti`)
}

function pushAlert(){
    alert('Yo amo JS')
}
let numOne = 0;
let numTwo = 0;
function pushSuma(){
    numOne = parseInt(prompt('Ingresa un valor para realizar una suma'));
    numTwo = parseInt(prompt(`Ahora ingresa otro valor para sumarlo a ${numOne}.`));
    alert(`El resulata de la suma ${numOne} + ${numTwo} es ${numOne + numTwo}`);
}