const leia= require('readline-sync');

let salbru=leia.questionFloat("Digite seu salario bruto: R$ ")
let adinot=leia.questionFloat("Digite o adicional noturno: R$ ")
let hrex=leia.questionFloat("Digite quantas horas extras voce tem: ")
let desc=leia.questionFloat("Digite seus descontos: R$ ")
let salliq = (salbru + adinot +(hrex * 5) - desc)

console.log('\nSeu salario liquido é de: R$ ', salliq.toFixed(2))