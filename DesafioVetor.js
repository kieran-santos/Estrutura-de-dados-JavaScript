/*Desafio: considere um vetor de 10 posições com números inteiros
aleatórios. Desenvolva um código em JavaScript que ordene o vetor
de forma crescente e apresente o menor, maior número e a somatória
do vetor. Não vale usar funções prontas do JavaScript.*/

let numeros = [78, 24, 61, 4, 48, 100, 368, 99, 142, 154];   
let soma = 0;                                   
                           
for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 10; j++) {          //aqui é necessário colocar que j = i+1 pq se não o j vai começar sempre do 0, o que significa que ele vai comparar os próximos com o anterior que já está certo - desse modo ele vai ordenar de forma decrescente 
        if(numeros[i] > numeros[j]){
            let contador = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = contador;
        }
    }
}

for(let i = 0; i <= 9; i++){
    soma = soma+numeros[i];
}

console.log("O vetor ordenado é: " + numeros);
console.log("A soma total é: " + soma);
console.log("O menor número é " + numeros[0] + " e o maior número é " + numeros[9]);