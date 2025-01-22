// Desafíos:
// 1.-Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir 
//     de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
// 2.-Crea una función que calcule el valor del factorial de un número pasado como parámetro.
// 3.-Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva 
//     el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del 
//     dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
// 4.-Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//     utilizando la altura y la anchura que se proporcionarán como parámetros.
// 5.-Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//     utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
// 6.-Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

let edad = 0;
let sexo = true;
let peso = 0;
let altura= 0;
let result=0;
console.log(edad, sexo, peso, altura, result)

function IMC(){
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    let imc = peso/altura
    imc.toFixed(2);
    console.log(imc, typeof(imc))
    return;
}
function sex(){
    if (sexo == 'hombre'){
        sexo = true; 
    }else if ( sexo == mujer){
        sexo = false;
    } else{
        console.log('El valor ingresado no es correcto')
    }
}
