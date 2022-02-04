'use strict';

// Задание 1
function getArrayParams(arr) {
    let min, max, sum, avg;
    min = arr[0];
    max = arr[0];
    sum = 0;
    avg = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        ;
        if (arr[i] > max) {
            max = arr[i]
        }
        ;
        sum = sum + arr[i]
    }
    avg = +(sum / arr.length).toFixed(2);

    return {min: min, max: max, avg: avg};
}


function getArrayParams(arr) {
    let min, max, sum, avg;
    min = arr[0];
    max = arr[0];
    sum = 0;
    avg = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        ;
        if (arr[i] > max) {
            max = arr[i]
        }
        ;
        sum = sum + arr[i]
    }
    avg = +(sum / arr.length).toFixed(2);

    return {min: min, max: max, avg: avg};
}

function worker(arr) {
    let sum = 0;
    let i = 0;
    while (i < arr.length) {

        sum = sum + arr[i];
        i++;
    }
    return sum;
}


function makeWork(arrOfArr, func) {
    let max = func(arrOfArr[0]);


    for (let i = 0; i < arrOfArr.length; i++) {
        if (func(arrOfArr[i]) > max) {

            max = func(arrOfArr[i])
        }
    }
    return max;
}


// Задание 3
function worker2(arr) {
    let max, min, diff
    let i = 0;
    max = arr[0];
    min = arr[0];
    while (i < arr.length) { // выводит 0, затем 1, затем 2
        if (arr[i] > max) {
            max = arr[i]
        }
        ;
        if (arr[i] < min) {
            min = arr[i]
        }
        ;
        i++;
    }
    diff = Math.abs(max - min);
    return diff;
}
