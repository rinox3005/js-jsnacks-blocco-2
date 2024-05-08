'use strict';

// array in input
const arrayA = ['pappa', 'ciotola', 'palla', 'corda', 'guinzaglio', 'snacks'];

console.log('Starting array:', arrayA)

// assegno ad una variabile length il risultato delle operazioni della funzione contaElementi
const length = contaElementi(arrayA);


// funzione per contare gli elementi di un array

function contaElementi(input) {

    let i = 0;

    while (input[i] !== undefined) {
        i++;
    }

    return i;
}

// funzione che rimuove l'ultimo elemento della coda

function rimuoviDallaCoda(array1) {

    const arrayNew = [];

    for (let i = 0; i < contaElementi(array1) - 1; i++) {
        arrayNew[i] = array1[i];
    }

    return arrayNew;
}

// stampo in console l'array risultante
console.log('Final array:', rimuoviDallaCoda(arrayA));