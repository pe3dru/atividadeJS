//Escreva um algoritmo, que leia números inteiros via teclado, 
// até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, 
// que sejam positivos.
const leia = require('readline-sync');

let idade
let soma = 0

do {
  idade = leia.questionInt('Digite uma idade (digite 0 para encerrar): ')
 
  if(idade > 0) {
    soma = soma + idade
  }
    
  }while( idade != 0)
  console.log('A soma das idades e ',soma)
  
