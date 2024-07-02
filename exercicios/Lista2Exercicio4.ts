import leia = require('readline-sync');

const lista : Set<number> = new Set<number>;


[2, 5, 1, 3, 4, 9, 7, 8, 10, 6].forEach(num => lista.add(num));

while(true){

    let valor = leia.questionInt("Digite um numero inteiro: ");

if(lista.has(valor)){
    console.log(`O numero ${valor} foi encontrado!`)
} else {
    console.log(`O numero ${valor} não foi encontrado!`)
    break;
}

}

