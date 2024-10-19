let nomes = []; //vetor em javascript
//nomes = ["joao", "maria", "carlos", "ana", "gabriela"];

for (let i = 0; i < 5; i++) {
    nomes[i] = prompt("Digite o nome da posição " + i);
}

for (let i = 1; i < 5; i++){
    console.log("O nome da posição " + i + " é: " + nomes[i]);
}

//nomes.forEach(nome_da_vez => console.log("O nome da vez é: " + nome_da_vez));

//Acessando posições de um vetor

/*console.log("O nome da posição 1 é: " + nomes[0]);
console.log("O nome da posição 2 é: " + nomes[1]);
console.log("O nome da posição 3 é: " + nomes[2]);
console.log("O nome da posição 4 é: " + nomes[3]);
console.log("O nome da posição 5 é: " + nomes[4]);*/
