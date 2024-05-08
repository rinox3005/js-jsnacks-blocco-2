'use strict';

// array di riferimento
const myArray = ['pappa', 'ciotola', 'palla', 'corda', 'guinzaglio', 'snacks'];

// funzione di stampa
function stampa(array) {
    // inizializzo le variabili
    let string = '';
    let i = 0;
    // finché l'elemento dell'array é diverso da undefined ciclo
    while (array[i] !== undefined) {
        // se il contatore é uguale a zero concateno nella nuova stringa l'elemento corrente di array e incremento l'indice
        if (i == 0) {
            string += `${array[i]}`;
            i++;
            // se il contatore é uguale a zero concateno nella nuova stringa l'elemento corrente di array e incremento l'indice (variazione per non avere la virgola alla fine della stringa)
        } else {
            string += `, ${array[i]}`;
            i++;
        }
    }

    // ritorno la stringa appena convertita
    return string;
}

// stampo il risultato in console

console.log(stampa(myArray));