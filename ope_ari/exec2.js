const leia= require('readline-sync')

let n1=leia.questionFloat("Digite sua primeira nota: ")
let n2=leia.questionFloat("Digite sua segunda nota: ")
let n3=leia.questionFloat("Digite sua terceira nota: ")
let n4=leia.questionFloat("Digite sua quarta nota: ")
let mediafinal = ((n1 + n2 + n3 + n4) / 4 )
console.log('\nSua média final é: ', mediafinal.toFixed(2))