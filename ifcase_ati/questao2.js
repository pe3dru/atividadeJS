
const leia= require('readline-sync')

let A

A = leia.questionInt('Digite um numero : ')

if (A % 2 === 0){
    console.log('O numero é par.')
}else if (A % 2 !== 0){
    console.log('O número é impar.')
}
if (A > 0){
    console.log('O numero é positivo.')
}else if (A < 0){
    console.log('O numero é negativo.')
}


