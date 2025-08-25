const leia= require('readline-sync')

let A, B, C, soma

A = leia.questionInt('\nDigite o valor de A : ')
B = leia.questionInt('\nDigite o valor de B: ')
C = leia.questionInt('\nDigite o valor de C: ')

soma = (A + B)
console.log('\nA soma de A e B é de:',soma,".")

if (soma > C){
    console.log('\nA soma de A + B é menor que o valor C.')
}else if (soma < C){
    console.log('\nA soma de A + B é menor que o valor de C.')
} else if (soma = C){
    console.log('\nA soma de A + B é igual ao valor de C')
}


