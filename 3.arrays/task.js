`use strict`

function compareArrays(arr1, arr2) {
    let result;
    return (arr2.every(function (element, index) {
        return arr1[index] === arr2[index];
    })) && (arr1.every(function (element, index) {
        return arr1[index] === arr2[index];
    }));
    return result; // boolean
}


function advancedFilter(arr) {
    let resultArr = arr.filter(function (number) {
        return (number > 0) && (number % 3 === 0);
    }).map(function (number) {
        return number * 10
    });
    return resultArr;
}
