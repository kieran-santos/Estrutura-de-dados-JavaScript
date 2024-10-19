class Pilha {
    constructor(){
        this.itens = [];
        this.totalItens = 0;
    }

    
    adicionar_elemento(elemento){
        this.itens.push(elemento);
        console.log(elemento);
        this.totalItens++;
    }

    //O push é um método que declaramos junto com o array
    //Como ele adiciona um elemento na última posição do array, não precisamos informar a posição
    //precisamos apenas colocar uma variável que receberá o valor adicionado no final da pilha 

    remover_elemento(){
        if(this.totalItens === 0){     //mantemos o if para caso a pilha esteja vazia
            console.log("Pilha vazia"); //porém, vamos utilizar o console.log pois o return quebra o loop
        }
        else{
        this.itens.pop();       //assim como no push, não precisamos indicar a posição
        this.totalItens--;}     //também não precisamos indicar o elemento ou seu valor, pois será sempre removido o último da pilha
    }

    peek(){
        return this.itens[0];
      }


}

let pilha = new Pilha();
pilha.adicionar_elemento(1);
pilha.adicionar_elemento(2);
pilha.remover_elemento();   //pop() sem console.log, pois o pop() apenas remove o objeto, não guarda valor
pilha.peek();                        