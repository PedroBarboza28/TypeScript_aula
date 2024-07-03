import { Queue } from "../interface/Queue";

const fila = new Queue<number>();

for(let i = 0; i <= 10; i++){
    fila.enqueue(i)
}

console.log("A fila é: ");

fila.printQueue()

console.log("Remover elemento: " + fila.dequeue())

fila.printQueue()

