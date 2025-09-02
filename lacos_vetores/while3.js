const leia = require('readline-sync');

let menoridade = 0;
let maioridade = 0;

let idade = leia.questionInt('Digite uma idade (numero negativo para encerrar): ');

while (idade >= 0) {
  if (idade < 21) {menoridade++;}else if (idade > 50) { maioridade++;}
  idade = leia.questionInt('Digite uma idade (número negativo para encerrar): ');
}

console.log('Total de pessoas com menos de 21 anos:', menoridade);
console.log('Total de pessoas com mais de 50 anos:', maioridade);

