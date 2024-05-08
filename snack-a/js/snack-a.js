'use strict';

//array in input

const inputArray = [1, 22, 31, 4, 55, 64, 37, 81, 23, 2, 17];

// funzione per contare gli elementi presenti nell'array

function contaElementi(input) {

    let i = 0;

    while (input[i] !== undefined) {
        i++;
    }

    return i;
}

// creo una nuova variabile che contenga il risultato della funzione che conta gli elementi 

let arrayLength = contaElementi(inputArray);

// stampo il risultato in console

console.log('The array has', arrayLength, 'elements');

