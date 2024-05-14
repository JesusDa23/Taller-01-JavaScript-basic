// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.

const numero = parseInt(prompt('Ingrese un numero para saber si es multiplo de 5: '));


if (numero % 5 == 0){
    console.log( numero + ' si es un multiplo de 5')
}
else {
    console.log(numero + ' no es nu multiplo de 5');
}