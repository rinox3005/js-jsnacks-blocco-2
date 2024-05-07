'use strict';

const firstArray = [1, 2, 23, 4, 5, 22, 7, 8, 12, 10];

const secondArray = [33, 56, 12, 1];

while (firstArray.length !== secondArray.length) {

    if (secondArray.length < firstArray.length) {
        secondArray.push(Math.floor((Math.random() * 100)))

    }
    else if (secondArray.length > firstArray.length) {
        firstArray.push(Math.floor((Math.random() * 100)))
    }

}
console.log(firstArray)
console.log(secondArray)
