'use strict';

const myArray = [1, 22, 31, 4, 55, 64, 37, 81, 23, 2, 17];

const userElement = Number(prompt('Search for item:'));

function trovaIndice(elementToCheck, inputArray) {

    let i = 0;

    while (inputArray[i] !== undefined) {

        if (inputArray[i] === elementToCheck) {
            return console.log('The element is contained inside the array in position', i);
        } else {
            i++;
        }
    }

    return console.log('Error Code -1! Item not found');

}

trovaIndice(userElement, myArray);


