
import leia = require('readline-sync');

const valores : Array<number> = new Array<number>;

let entrada;

valores.unshift(2, 4, 3, 6, 7, 1, 8, 9, 5, 10);

entrada = leia.questionInt('Digite o numero que deseja encontrar: ')

valores.push(entrada)

if(entrada === valores[entrada]){

console.log(`O numero ${entrada} esta localizado na posicao: ${valores.indexOf(entrada)}`)}
else {
    console.log(`O numero ${entrada} não foi encontrado!
        `)
}