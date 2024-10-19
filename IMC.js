alert("Vamos calcular seu IMC");
let peso = parseInt (prompt("Digite seu peso"));
let altura = parseFloat (prompt("Digite sua altura"));
let IMC = (peso/(altura*altura));
alert("Seu IMC é: " + IMC);

if(IMC<18.5){
    alert("Sua classificação é: baixo peso");
}

if(IMC>=18.5 && IMC<=24.9){
    alert("Sua classificação é: peso adequado");
}

if(IMC>25){
    alert("Sua classificação é: sobrepeso");
};

//variavel parseFloat ela converte o texto para numero
//float é de numero decimal
//o prompt serve pra escrever (escreval) dentro da variável