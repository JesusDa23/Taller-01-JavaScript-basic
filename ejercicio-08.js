// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.
// Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

let nombres = ["Pedro", "Pablo", "María", "Juan", "Diana"]

let nombre1 = prompt('Ingrese un nombre: ')
nombres.push(nombre1)

let nombre2 = prompt('ingresa el segundo nombre: ')
nombres.splice(3,0, nombre2)

console.log(nombres)
