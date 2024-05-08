'use strict';

// array di riferimento 
const myArray = [1, 22, 31, 4, 55, 64, 37, 81, 23, 2, 17];

// chiedo tramite prompt un numero da cercare all'inteno dell'array
const userElement = Number(prompt('Search for item:'));

// funzione per controllare se l'elemento é presente
function trovaIndice(elementToCheck, inputArray) {

    let i = 0;
    // finché l'elemento dell'array é diverso da undefined continuo a ciclare
    while (inputArray[i] !== undefined) {
        // se l'elemento corrente é uguale all'elemento da controllare stampiamo che é contenuto e dove si trova
        if (inputArray[i] === elementToCheck) {
            return console.log('The element is contained inside the array in position', i);
            // altrimenti incremento il contatore
        } else {
            i++;
        }
    }
    // se non entro nel ciclo vuol dire che non é presente
    return console.log('Error Code -1! Item not found');

}

// invoco la funzione
trovaIndice(userElement, myArray);


