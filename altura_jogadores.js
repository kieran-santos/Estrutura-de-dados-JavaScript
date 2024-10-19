console.log("Vamos descobrir a media da altura dos jogadores");
const numero_jogadores = parseInt(prompt("Digite o número de jogadores"));
var soma_altura = 0;

for(let i = 1; i <= numero_jogadores; i++){
    var altura = parseFloat(prompt("Digite a altura do jogador " + i + ":"));
    soma_altura = soma_altura + altura;
}

const media = soma_altura / numero_jogadores;
console.log("A média é: " + media);