console.log("Vamos calcular sua menção");
const nota_um = parseFloat(prompt("Digite a primeira nota")); //prompt é uma função de entrada que já da a mensagem sobre a entrada que será digitada
const nota_dois = parseFloat(prompt("Digite a segunda nota")); //tudo que o usuário digita cai como string, por isso o parseFloat com o prompt
const media = (nota_um + nota_dois) / 2;
console.log("Sua média é: " + media);
if (media >= 8.5) {
  console.log("Sua menção é A");
}
else {
  if (media >= 7.5 && media < 8.5) {
    console.log("Sua menção é B");
  }
  else {
    if (media < 7.5 && media >= 6) {
      console.log("Sua menção é C");
    }
    else {
      if (media < 6 && media >= 5) {
        console.log("Sua menção é D");
      }
      else {
        console.log("Sua menção é E");
      }
    }
  } //ALT + SHIFT + F é o CTRL G do visual code
}