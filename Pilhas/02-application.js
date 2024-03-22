class Pilha {
  constructor() {
    this.itens = [];
  }

  push(item) {
    this.itens.push(item);
  }

  pop() {
    if (this.estaVazia()) {
      throw new Error("Pilha vazia.");
    }
    return this.itens.pop();
  }

  topo() {
    if (this.estaVazia()) {
      throw new Error("Pilha vazia.");
    }
    return this.itens[this.itens.length - 1];
  }

  estaVazia() {
    return this.itens.length === 0;
  }

  tamanho() {
    return this.itens.length;
  }

  limpar() {
    this.itens = [];
  }
}

function avaliarExpressaoPosFixa(expressao) {
  let pilha = new Pilha();
  let elementos = expressao.split(" ");

  elementos.forEach((elemento) => {
    if (!isNaN(parseFloat(elemento))) {
      pilha.push(parseFloat(elemento));
    } else {
      let b = pilha.pop();
      let a = pilha.pop();
      switch (elemento) {
        case "+":
          pilha.push(a + b);
          break;
        case "-":
          pilha.push(a - b);
          break;
        case "*":
          pilha.push(a * b);
          break;
        case "/":
          pilha.push(a / b);
          break;
        default:
          throw new Error(`Operador inválido: ${elemento}`);
      }
    }
  });

  return pilha.pop();
}

let expressao = "3 4 + 2 * 7 /";
let resultado = avaliarExpressaoPosFixa(expressao);
console.log(`Resultado da expressão '${expressao}': ${resultado} `);
