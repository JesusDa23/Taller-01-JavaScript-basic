// Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1,1,1,1,0,0,0,1];
let contar = 0

for (i = 0; i < nums.length; i++){
    if (nums[i] == 1 )
        {
            contar++
        }
}

console.log ( contar)