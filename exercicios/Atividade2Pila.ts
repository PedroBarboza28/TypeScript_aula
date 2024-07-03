import { Stack } from "../interface/Stacks";
const leia = require('readline-sync');
const pilha = new Stack<string>;
let nome;
let entrada;

console.log("*****************************************************************************");
console.log("*** 1 - Adicionar um novo livro na pilha. Deve solicitar o nome do livro.****");
console.log("******************* 2 - Listar todos os livros da Pilha *********************");
console.log("********************* 3 - Retirar um livro da pilha *************************");
console.log("***************** 0 - O programa deve ser finalizado.************************");

while(true){

entrada = leia.questionInt("\nEntre com a opcao: ")

switch(entrada){

case 1:
    nome = leia.question("\nNome do livro: ")
    pilha.push(nome)
    console.log("\nLivro Adicionado!")
    break;

case 2:
    console.log("\nLivros na pilha:")
    pilha.printStack()
    break;

case 3:
    pilha.pop()
    console.log("\nUm livro foi retirado da pilha!")
    break;

case 0:
    console.log("\nPilha finalizada!")
  break;

default :
    console.log("\nDigite o numero de uma opcao valida!")
    break;
}

}