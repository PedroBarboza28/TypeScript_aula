import readlinesync = require("readline-sync");
let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat("digite: ")

for(let i = 0; i <= 10; i++){

    for(let o = 0; o <= 10; o++){
console.log(`Soma: ${i} + ${o} = ${i + o} `)
    }
}