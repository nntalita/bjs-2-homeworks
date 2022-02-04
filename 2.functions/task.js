'use strict';

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
        if (arr[i] > max) {
            max = arr[i]
        }
        sum = sum + arr[i];
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
    for (let i = 1; i < arrOfArr.length; i++) {
        let tmp = func(arrOfArr[i]);
        if (tmp > max) {
            max = tmp
        }
    }
    return max;
}


// Задание 3
function worker2(arr) {
    let arrParams = getArrayParams(arr);
    return Math.abs(arrParams.max - arrParams.min);
}
