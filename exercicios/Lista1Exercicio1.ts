import leia = require('readline-sync');

const cores : Array<string> = new Array<string>;

for(let i = 0; i < 5; i++){
    cores.push(leia.question(`Entre com a cor ${i+1}: `))
}

console.log("Sem Ordem:")
for(let n of cores)

console.log(n)

cores.sort()
console.log("\nEm ordem: ")
for(let n of cores)
console.log(n)
