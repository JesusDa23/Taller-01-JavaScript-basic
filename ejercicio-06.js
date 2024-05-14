// Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario. Por ejemplo, si el usuario ingresó la frase Hola Mundo y el número 5, el programa debe imprimir Hola Mundo 5 veces:

const frase = prompt('Por favor ingresa una frase: ')
const numero = parseInt(prompt('Por favor ingrese el numero de veces que desea la frease: '))

for ( i = 0; i < numero; i++){
    console.log(frase)
}

