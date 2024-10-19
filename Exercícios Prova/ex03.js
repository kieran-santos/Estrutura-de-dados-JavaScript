class Fila {
    constructor() {
        this.itens = [];
        this.fim = 0; // Mantemos o controle do final da fila
    }   

    isEmpty() {
        return this.fim === 0;
    }

    enqueue(elemento) {
        this.itens[this.fim] = elemento; // Adiciona o elemento na posição final
        this.fim++;
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Fila vazia.");
            return;
        }

        const itemRemovido = this.itens[0]; // Armazena o item removido
        // Realoca os elementos para frente
        for (let i = 1; i < this.fim; i++) {
            this.itens[i - 1] = this.itens[i];
        }
        this.fim--; // Decrementa o tamanho da fila
        this.itens.length = this.fim; // Ajusta o tamanho do array

        return itemRemovido; // Retorna o item removido
    }

    peek() {
        if (this.isEmpty()) {
            return "Fila vazia.";
        }
        return this.itens[0];
    }
}

let fila = new Fila();
fila.enqueue("A");
fila.enqueue("B");
fila.enqueue("C");
console.log(fila.dequeue()); // Deve imprimir "A"
console.log(fila.peek());     // Deve imprimir "B"
