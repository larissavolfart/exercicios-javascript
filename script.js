// Exercícios Módulo - Fundamentos de JavaScript - Growdev

// Exercício 1 (operadores aritméticos): Dado que um funcionário trabalha 8 horas por dia, durante
// 5 dias. Calcule o total de horas trabalhadas na semana.
const horasTrabalhadas = 8
const diasTrabalhados = 5

const horasTotaisTrabalhadas = horasTrabalhadas * diasTrabalhados
console.log(horasTotaisTrabalhadas)

// Exercício 2 (operadores aritméticos): O valor de um produto é R$50. Um cliente comprou 3. Ele ganhou
// um desconto de R$10 no total da compra. Calcule o preço final.
const preco = 50
const itens = 3
const desconto = 10

const precoTotal = (preco * itens) - desconto
console.log(precoTotal)

// Exercício 3 (operadores de atribuição): Uma loja tinha 50 itens no estoque e vendeu 5. Calcule o estoque final.
let estoque = 50
const vendidos = 5
estoque -= vendidos
console.log(estoque)

// Exercício 4 (operadores relacionais): Um cliente tem 17 anos e quer comprar um item para maiores de idade. 
// Verifique se ele pode comprar o produto.
const idadeCliente = 17
const idadeMinima = 18

const podeComprar = idadeCliente >= idadeMinima
console.log(podeComprar) 

// Exercício 5 (operadores lógicos): Uma pessoa tem 72 anos. Sabe-se que é permitido votar a partir dos 16 anos e o voto
// obrigatório se dá entre 18 anos e 70 anos. Verifique se a pessoa pode e se é obrigatório o voto.const idade1= 72
const idade1= 72
const podeVotar = idade1 >= 16
const obrigatorioVotar = idade1 >= 18 && idade1<= 70

console.log(`Pode votar: ${podeVotar}`)
console.log(`Obrigatório votar: ${obrigatorioVotar}`)

//Exercício 6 (operadores lógicos): Você opera um e-commerce e precisa verificar se um cliente tem direito a um desconto.
// As regras são: se é cliente VIP ou tiver valor de compra maior que 100 reais, tem direito ao desconto.
const clienteVip = false
const valorCompra = 80

const temDesconto = clienteVip || valorCompra >= 100

console.log(temDesconto)

// Exercício 7 (if else, else if): Crie um programa que recebe a hora e exibe se é manhã, tarde, noite ou hora inválida. 
// Considere:
// Manhã = 5h - 11h, Tarde = 12h - 17h, Noite = 18h - 22h.
const hora = 17

if (hora >= 5 && hora <= 11){
    console.log('Manhã!')
} else if (hora >=12 && hora <= 17) {
    console.log('Tarde!')
} else if (hora >=18 && hora <= 22){
    console.log('Noite!')
} else {
    console.log('Hora inválida.')
}

// Exercício 8 (switch case): Crie um programa que voce escolhe a cor e exibe as seguintes mensagens:
// "Vermelho: cor da paixão, Verde: cor da natureza, Azul: cor da tranquilidade, Outra: cor desconhecida."
const cor = 'azul'

switch (cor){
    case 'azul' :
        console.log('Cor da tranquilidade.')
        break
    case 'verde' :
        console.log('Cor da natureza.')
        break
    case 'vermelho' :
        console.log('Cor da paixão.')
        break
    default :
        console.log('Cor desconhecida.')
}

// Exercicio 9 (while): Crie um programa que faça uma contagem regressiva de um número até chegar a zero. O programa deve imprimir cada número
// no consolte. Intruções: 1. Solicite que a pessoa usuária insira um numero inteiro positivo. 2. Imprimia cada número no console. 
// 3. Quando chegar em zero, imprima 'Contagem finalizada'.
let numeroInserido = parseInt(prompt('Insira um número.')) 

if (numeroInserido > 0){
    while (numeroInserido >= 0) {
        console.log(numeroInserido)
        numeroInserido--
    }

console.log('Contagem finalizada!')
  
} else {
    console.log('Por favor, insira um número inteiro positivo.')
}

// Exercício 10 (for): Faça um programa que exiba a tabuada de multiplicação do número digitado pela pessoa usuária.
const numeroEscolhido = parseInt(prompt('Escolha um número:'))
for (let i = 1; i <= 10; i++){
    console.log(`${numeroEscolhido} x ${i} = ${numeroEscolhido * i}`)
}

// Exercício 11 (for): Imprima os números de 1 a 10. Um em cada linha.
for (i = 1; i <= 10; i++) {
    console.log(i)
}

// Exercício 12 (while): Peça para o usuário inserir palavras. Continue pedindo até o usuário digitar "sair" para finalizar. Exiba cada palavra.
let palavra = prompt('Insira uma palavra. Caso desejar finalizar, digite "sair".')

while (palavra !== 'sair'){
    palavra = prompt('Continue digitando uma palavra. Caso desejar finalizar, digite "sair".')
    console.log(palavra)
}

console.log('Processo finalizado.')

//Exercício 13 (do while): Peça ao usuário que digite a palavra "aceito" para aceitar os temos. Continue pedindo até que a palavra "aceito" seja escrita.
let palavra2

do {
    palavra2 = prompt('Escreva a palavra "aceito" para aceitar os termos.')
} while ((palavra2 !== 'aceito'))
    console.log('Termos aceitos.')


//Exercício 14 (for of): Crie um programa que percorre um array com as datas em que o Brasil venceu a copa do mundo.
const brasilVenceuCopa = [1959, 1962, 1970, 1994, 2002]

for (const anos of brasilVenceuCopa) {
    console.log(`O Brasil foi campeão da Copa de ${anos}`)
}

//Exercício 15 (for in): Crie um objeto chamado original com algumas propriedades (como nome, idade, cidade). 
// Utilize um loop para criar uma cópia do objeto para uma nova variável chamada cópia.
const original = {
    nome: 'Ana',
    idade: 23,
    cidade: 'Campo Bom'
}

const copia = {}

for (const chave in original) {
    copia[chave] = original[chave]
}

console.log(copia)

//Exercício 16 (funções - retorno de função): Escreva uma função calcularAreaRetangulo que recebe a altura
// e a largura de um retângulo e retorne a área. 
function calcularAreaRetangulo(altura ,largura){
    const area = altura * largura
    return area
}

console.log(calcularAreaRetangulo(5, 10))


//Exercício 17 (funções - arrow function): Crie uma arrow function chamada calcularPrecoComDesconto que recebe:
// precoOriginal: preço inicial de um produto.
// desconto: porcentagem de desconto.
// A função deve retornar o preço final após aplicar o desconto, arredondado para duas casas decimais.
const calcularPrecoComDesconto = (precoOriginal, desconto) => {
    const precoFinal = precoOriginal - (precoOriginal * (desconto / 100))
    return precoFinal.toFixed(2)
}
    console.log(calcularPrecoComDesconto (100, 20)) 
    console.log(calcularPrecoComDesconto(250, 15))