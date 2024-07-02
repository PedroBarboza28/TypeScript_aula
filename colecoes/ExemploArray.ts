import readlinesync = require("readline-sync");

 const numeros: Array<number> = new Array<number>();

 numeros.push(7)
 numeros.push(5)
 numeros.push(1)
 numeros.push(7)

 numeros.unshift(1.0, 2, 3)
 numeros.push(readlinesync.questionFloat("Entre com um valor: "))
 console.log(numeros);

 for(let numero of numeros)
    console.log(numero)
console.log(`O numero 5 esta no indice: ${numeros.indexOf(5)}`);
console.log(`O numero 7 esta no indice: ${numeros.indexOf(7)}`);
console.log(`O numero 51 esta no indice: ${numeros.indexOf(51)}`);
console.log(`O numero 71 esta indice: ${numeros.includes(7)}`);

numeros[numeros.indexOf(5)] = 10

console.table(numeros);

numeros.splice(numeros.indexOf(1), 1);

console.table(numeros);