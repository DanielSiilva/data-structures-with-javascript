export class Stack {
  constructor() {
    this.items = [];
  }

  //Adiciona um item ao topo da pilha.
  push(item) {
    this.items.push(item);
  }

  //Remove e retorna o item do topo da pilha. Lança um erro se a pilha estiver vazia
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    return this.items.pop();
  }

  //retorna o item do topo da pilha sem removê-lo. Lança um erro se a pilha estiver vazia.
  top() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    return this.items[this.items.length - 1];
  }

  //verifica se a pilha está vazia
  isEmpty() {
    return this.items.length === 0;
  }

  //Retorna o número de itens na pilha.
  size() {
    return this.items.length;
  }

  //Remove todos os itens da pilha.
  clear() {
    this.items = [];
  }
}
