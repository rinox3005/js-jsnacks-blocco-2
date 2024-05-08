'use strict';

// array in input
const arrayA = ['pappa', 'ciotola', 'palla', 'corda', 'guinzaglio', 'snacks'];

console.log('Starting array:', arrayA)

// elemento da inserire in testa

const elementE = 'pettorina';

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

// funzione che rimuove il primo elemento dell'array

function rimuoviDallaTesta(array1, element) {

    const arrayNew = [element];

    for (let i = 0; i < contaElementi(array1); i++) {

        arrayNew[i + 1] = array1[i];
    }

    return arrayNew;
}

// stampo in console l'array risultante
console.log('Final array:', rimuoviDallaTesta(arrayA, elementE));