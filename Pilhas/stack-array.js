//Pilha baseada em array

export class Stack {
  constructor() {
    this.items = [];
  }
  //Add element, sempre no topo da pilha, ou seja no final!
  push(element) {
    this.items.push(element);
  }

  //Remove o elemento da pilha
  pop() {
    return this.items.pop();
  }

  //Devolve o elemento que esta no topo da pilha
  peek() {
    return this.items[this.items.length - 1];
  }

  //Verifica se a pilha esta vazia
  isEmpty() {
    return this.items.length === 0;
  }

  //Verifica o tamanho da pilha
  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}
