const leia= require('readline-sync')

let n1=leia.questionFloat("Digite sua primeira numero: ")
let n2=leia.questionFloat("Digite sua segunda numero: ")
let n3=leia.questionFloat("Digite sua terceira numero: ")
let n4=leia.questionFloat("Digite sua quarta numero: ")
let dif = ((n1 * n2) - (n3 * n4))
console.log('\nA diferença do produto 1 para o produto 2 é de: ', dif.toFixed(2))