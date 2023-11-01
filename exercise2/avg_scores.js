"use strict"

function getaverage(scores) {
    let sum = 0;
    let numscores = scores.length;
    for (let i = 0; i < numscores; i++) {
        sum += scores[i];
    }
    return sum / numscores
}

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

let average = getaverage(myScores);
console.log(average);

average = getaverage(yourScores);
console.log(average);

console.log("when does this console log run?")