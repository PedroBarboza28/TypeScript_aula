import leia = require('readline-sync');

const entre : Set<number> = new Set<number>;

for(let i = 0; i < 10; i++){

entre.add(leia.questionInt("Entre com 10 numeros inteiros: "))

}

console.log("Listar dados do Set:")

const ordem = Array.from(entre).sort((a,b) => a - b)
ordem.forEach( l => console.log(l)) 


