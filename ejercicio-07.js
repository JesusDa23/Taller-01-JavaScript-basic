// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

let num1 = parseInt(prompt('Ingresa el primer numero: '));
let num2 = parseInt(prompt('Ingresa el segundo numero: '));

do {                 
    console.log(num1)
    num1++
}
while (num1 <= num2)