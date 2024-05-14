//Escribe un programa que:
// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

let numero = prompt('ingrese el numero: ');
let lista = [];

for (i = 0; i <= numero; i++){
    lista.push(i)
}

lista.splice(2,1)
console.log(lista)
