import { Stack } from "./stack-array.js";

const stak = new Stack();

//Metodo isEmpty
console.log("Metodo isEmpty", stak.isEmpty());

//Metodo Push
console.log("Metodo push");
stak.push(6);
stak.push(5);
stak.push(3);

//Metodo size
console.log("Metodo size", stak.size());

//Metodo peek()
console.log("Metodo peek", stak.peek());

stak.pop();
stak.pop();

//Metodo peek()
console.log("Metodo peek", stak.peek());

stak.clear();

//Metodo size
console.log("Metodo size", stak.size());
