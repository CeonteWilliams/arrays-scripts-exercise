"use strict"

const family = ["John","Kathy","Gregg","Bianca",]

let intitial = 0
let step = 1
let final = family.length-1

let currentIndex = intitial


while(currentIndex <= final){ 
    console.log(`family member ${currentIndex} is ${family[currentIndex]}!`) //100
    currentIndex +=step
} 

console.log("when does this console.log run???")