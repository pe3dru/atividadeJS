
const leia= require('readline-sync');

let salario=leia.questionInt("Digite seu salario: R$ ")
let abono=leia.questionInt("Digite seu abono: R$ ")
let novosalario = salario + abono 
console.log('\nSeu novo salário é de: R$ '+ novosalario)

