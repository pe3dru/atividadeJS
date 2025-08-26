const leia = require('readline-sync')

let produto, preco, quant, total
console.log('1 - Cachorro-quente R$ 10 | 2 - X-Salada R$ 15 | 3 - X-Bacon R$ 18 | 4 - Bauru R$ 12 | 5 - Refrigerante R$ 8 | 6 Suco de laranja R$ 13')
produto = leia.questionInt('Escolha um produto: ')
quant = leia.questionInt('Quantas unidades voce quer?')

switch(produto){
    case 1:
        console.log('Cachorro quente ')
        preco = 10
        break
    case 2:
        console.log('X-Salada')
        preco = 15
        break
    case 3:
        console.log('X-Bacon')
        preco = 18
        break
    case 4:
        console.log('Bauru')
        preco = 12
        break
    case 5:
        console.log('Refrigerante')
        preco = 8
        break
    case 6:
        console.log('Suco de laranja')
        preco = 13
    default:
        console.log('Opção inválida')
}
total = (quant * preco)
console.log('O valor total é de: ', total)