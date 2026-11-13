
const nome = "Luis Ribeiro"
let idade = 32
let cidade = "Limeira"
// console.log(nome)
// console.log("Olá, " + nome + "! Você tem " + idade + " anos e mora em " + cidade + ".")
// console.log(`Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}`)

// kebab-case para nomes de arquivos
// camelCase para variáveis, constantes, objetos e funções
// PascalCase para classes e métodos (Orientação a Objetos)

// Como descobrir o tipo de uma variável?
// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof cidade)

const teste = null
console.log(typeof teste)
const frutas = ["Laranja", "Pera", "Uva", "Manga", "Banana", "Tomate","Maçã", "Abacaxi", "Melancia"]

frutas.sort()
// console.log(frutas[3])
frutas.forEach(fruta => {
    //console.log(fruta)
})

const pessoa = {
  nome: "Luis",          // string
  idade: 32,             // number
  cidade: "Limeira",     // string
  salario: 1234.56,      // number (ponto para decimais)
  ativo: true,           // boolean
  habilidades: ["JavaScript", "HTML", "CSS"], // array de strings
  endereco: {            // objeto aninhado
    rua: "Rua Exemplo",
    numero: 123,
    bairro: "Centro",
    cidade: "Limeira",
    estado: "SP"
  },
  apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, moro em ${this.endereco.bairro} e trabalho com ${this.habilidades.join(", ")}.`;
  }
}

console.log(pessoa.apresentar())
// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa.habilidades[0])
// console.log(pessoa.endereco.rua + ", " + pessoa.endereco.numero + " - " + pessoa.endereco.bairro + ", " + pessoa.endereco.cidade + " - "
//     + pessoa.endereco.estado)
// console.log(`${pessoa.endereco.rua}, ${pessoa.endereco.numero} - ${pessoa.endereco.bairro}, ${pessoa.endereco.cidade} - ${pessoa.endereco.estado}`)



// =================

const minhaFuncao = function () {
    console.log("Esta é a função minhaFuncao.")
}
// Chamando a função minhaFuncao
minhaFuncao()


const somar = function (n1,n2) {
    return n1 + n2
}

// Chamando a função somar
const resultado = somar(10, 35)
console.log("Resultado da soma: " + resultado)


// =================

const parImpar = () => {

    // Lista números pares e ímpares
    // for (let i = 100; i > 0; i--) {
    for (let i = 1; i < 100; i++) {
        const resto = i % 2

        if (resto == 0) {
            console.log("O número " + i + " é par")
        } else {
            console.log("O número " + i + " é ímpar")
        }

        // resto == 0
        // ? console.log("O número " + i + " é par")
        // : console.log("O número " + i + " é ímpar")
    }

}
// parImpar()

function saudacao(){
    // fazer a saudação bom dia, boa tarde ou boa noite de acordo com a hora do dia
    const hora = new Date().getHours()
    let saudacao = ""
    if (hora >= 0 && hora < 12) {
        saudacao = "Bom dia"
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde"
    } else {
        saudacao = "Boa noite"
    }
    console.log(saudacao + ", Luis!")
}
saudacao()

function diaDaSemana(numero) {
    let dia = ""
    switch (numero) {
        case 1:
            dia = "domingo"
            break
        case 2:
            dia = "segunda-feira"
            break
        case 3:
            dia = "terça-feira"
            break
        case 4:
            dia = "quarta-feira"
            break
        case 5:
            dia = "quinta-feira"
            break
        case 6:
            dia = "sexta-feira"
            break
        case 7:
            dia = "sábado"
            break
        default:
            dia = "Não é um dia da semana"
            break
    }
    return dia
}

// console.log(diaDaSemana(1))


function gerarPartidas() {
    const times = ["Palmeiras", "São Paulo", "Santos", "Bragantino"]
    const partidas = []
    for (let timeA = 0; timeA < times.length - 1; timeA++) {
        for (let timeB = timeA + 1; timeB < times.length; timeB++) {
            partidas.push(`${times[timeA]} x ${times[timeB]}`)
        }
    }
    partidas.forEach(partida => console.log(partida))
}

// gerarPartidas()


function tabuada() {
    for (let i = 1; i <= 10; i++) {
        console.log("Tabuada do " + i)
        for (let j = 1; j <= 10; j++) {
            let resultado = i * j
            console.log(i + " x " + j + " = " + resultado)
        }
    }
}

// tabuada()



