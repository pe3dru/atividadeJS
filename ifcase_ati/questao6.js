const leia = require('readline-sync')

let cargo, ajuste, salario, novosalario
console.log('1 - Gerente - 10% | 2 - Vendedor 7% | 3 - Supervisor 9% | 4 - Motorista 6% | 5 - Estoquista 5% | 6 - Tecnico de TI 8%')
cargo = leia.questionInt('Qual o seu cargo: ')
salario = leia.questionInt('Qual o seu salario?')

switch(cargo){
    case 1:
        console.log('Gerente')
        ajuste = 10
        break
    case 2:
        console.log('Vendedor')
        ajuste = 7
        break
    case 3:
        console.log('Supervisor')
        ajuste = 9
        break
    case 4:
        console.log('Motorista')
        ajuste = 6
        break
    case 5:
        console.log('Estoquista')
        ajuste = 5
        break
    case 6:
        console.log('Tecnico de TI')
        ajuste = 8
    default:
        console.log('Opção inválida')
}
novosalario = (salario +(salario * ajuste / 100))
console.log('O seu salario é de: ', novosalario)