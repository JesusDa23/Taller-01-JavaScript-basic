// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

const nombre = prompt("Por favor ingrese su nombre: ");
const añoDeNacimiento = parseInt(prompt("Por favor ingrese su año de nacimiento: "));

let añoActual = 2024;
let añosUsuario;

function años(añoDeNacimiento, añoActual){
     añosUsuario = añoActual - añoDeNacimiento;
}


años(añoDeNacimiento, añoActual);
console.log(añosUsuario);

console.log ( `Hola ${nombre}, grandioso! Tienes ${añosUsuario} `);
