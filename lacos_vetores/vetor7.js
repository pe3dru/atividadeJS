const leia = require('readline-sync');

let numeros = [2,5,1,3,4,9,7,8,10,6]
let numero = leia.questionInt("Digite o numero que deseja procurar: ");
let busca = numeros.includes(numero);

if (busca) {
  let posicao = numeros.indexOf(numero);
  console.log('Numero encontrado na posição', posicao, '.');
} else {
  console.log("Numero não encontrado no vetor.");
}
