let numberS = 0;
let intentos = 0;
let numSorteos = [];
let numMax = 10;

startGame();

function SecretNumber() {
    let numeroGenerado = Math.floor(Math.random()*numMax)+1; 
    // si el numero generado esta en laista hacemos otra calculo
    console.log(numeroGenerado,);
    console.log( numSorteos);
    if (numSorteos.length == numMax){
        intTextosHtml('p','Ya sorteamos todos los numeros posibles ')
        intTextosHtml('p', 'Fin del Juego¡¡')
    }else{
        if (numSorteos.includes(numeroGenerado)){
            return SecretNumber();
        }  else{
            numSorteos.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function intTextosHtml(elemento, texto){
    let textoHtml = document.querySelector(elemento);
    textoHtml.innerHTML=texto;
}

function comprobarIntento(){
    let intentoNumJs = parseInt(document.getElementById('intentoNum').value);
    console.log(intentoNumJs, typeof(intentoNumJs), intentos)
    if (numberS == intentoNumJs ){
        intTextosHtml('p', `!!Felicidades acertaste en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'} `);
        intTextosHtml('h1', '!!GANASTE')
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (numberS > intentoNumJs){
        intTextosHtml('p', `El Numero secreto es mayor que ${intentoNumJs}`)
    } else {
        intTextosHtml('p', `El Numero secreto es menor que ${intentoNumJs}`)
    }
    intentos++;
    cleanBox();
    
    return;
}

function cleanBox(){
    document.querySelector('#intentoNum').value = '';
    }

//function numeros 

function startGame(){
    intTextosHtml('h1', 'The Secret Number Game ');
    intTextosHtml('p', `Ingresa un valor del 1 al ${numMax}`);
    numberS = SecretNumber();
    intentos = 1;
}


function resetGame(){
    cleanBox();
    startGame();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

function restartGame(){
    
}
