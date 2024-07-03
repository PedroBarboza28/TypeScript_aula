import { Queue } from "../interface/Queue";
const leia = require('readline-sync');
const cadastro = new Queue<string>;
let nome;
let entrada;
let retirar;
let sair;

console.log("\n Escolha uma das opções para prosseguir:")
console.log("\n1: Adicionar um novo Cliente na fila.");
console.log("2: Listar todos os Clientes na fila.");
console.log("3: Chamar (retirar) uma pessoa da fila.");
console.log("0: O programa deve ser finalizado.");

while(true){
entrada = leia.questionInt(`\nInsira o numero da opcao desejada: `)
nome
if(entrada === 1){
 nome = leia.question(`\nDigite o nome do usuario: `)
 cadastro.enqueue(nome)
 console.log(`\nCliente adicionado!`)}

else if(entrada === 2){
    if(cadastro.isEmpty()){
        console.log(`\nA fila esta vazia!`)
    } else{
        console.log(`\nFila:`)
        cadastro.printQueue()
   }}

else if(entrada === 3){
    if(cadastro.isEmpty()){
        console.log(`\nA fila esta vazia!`)
    } else{
    retirar = leia.question(`\nDigite "s" para retirar o primeiro usuario da fila: `)
    cadastro.dequeue()}
    console.log(`O cliente foi chamado!`)} 
    
    
else if(entrada > 3 || entrada < 0) {
        console.log(`Digite um valor valido!`)}

else{  

    sair = leia.question(`Deseja continuar no programa? se sim aperte 's' se nao aperte '0':`)
    if(sair === 's'){
        
    }else{
        console.log(`Programa finalizado!`)
        break;
    }

}
}

    

