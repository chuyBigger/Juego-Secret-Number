

function hi(){
    console.log('Hola Mundo')
}


function named() {
    let nombre = document.getElementById('nombres').value;
    console.log(`Hola mi querido ${nombre},`) 
}

function numberOne (){
    let numberS = parseInt(document.getElementById('numberCath').value);
    numberS = numberS * 2 
    console.log(numberS)
    return;
}

function elMayor (){
    let nOne = parseInt(document.getElementById('numeroOne').value)
    let nTwo = parseInt(document.getElementById('numeroTwo').value)
    if (nOne > nTwo){
        console.log(nOne)
    } else if (nTwo > nOne){
        console.log(nTwo)
    } else {
        console.log(`El valor ${nOne} y ${nTwo} tiene el mismo valor!!!`)
    }
}

function numberSquare(){
    let number2 = parseInt(document.getElementById('number2').value);
    number2 = number2 * number2 
    console.log(number2)
    return;
}