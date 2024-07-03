const leia = require('readline-sync');

let numero1: number = leia.questionInt("Numero 1: ");
let numero2: number = leia.questionInt("Numero 2: ");

function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

console.log(`A soma de ${numero1} e ${numero2} é: ${somar(numero1, numero2)}`);
