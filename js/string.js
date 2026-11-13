function analisarString(texto) {
    // 1. Contagem de caracteres
    const totalCaracteres = texto.length

    // 2. Conversão de caixa
    const maiusculas = texto.toUpperCase()
    const minusculas = texto.toLowerCase()

    // 3. Inversão da string
    const invertida = texto.split("").reverse().join("")

    // 4. Contagem de vogais e consoantes
    const vogais = texto.match(/[aeiouáéíóúãõâêîôûàèìòù]/gi)?.length || 0
    const consoantes = texto.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0

    // 5. Remoção de espaços em branco
    const semEspacos = texto.replace(/\s+/g, "")

    // 6. Extração de palavras
    // const palavras = texto.trim().split(/\s+/)
    const palavras = texto.split(" ")
    const numeroPalavras = palavras.length

    // 7. Substituição de texto
    // let substituida = texto;
    // if (palavraParaSubstituir && novaPalavra) {
    //     const regex = new RegExp(palavraParaSubstituir, "gi");
    //     substituida = texto.replace(regex, novaPalavra);
    // }

    // 8. Busca de substring
    // const contemSubstring = substringBusca
    //     ? texto.toLowerCase().includes(substringBusca.toLowerCase())
    //     : false;

    // Retorna todos os resultados em um objeto
    return {
        totalCaracteres,
        maiusculas,
        minusculas,
        numeroPalavras
        // invertida,
        // vogais,
        // consoantes,
        // semEspacos,
        // palavras
    };
}

const botaoResultado = document.getElementById("resultado")
const botao = document.getElementById("btnProcessar")
const texto = document.getElementById("texto")

botao.addEventListener("click", () => {
    const resultado = analisarString(texto.value)

    botaoResultado.innerHTML = `Quantidade de caracteres: ${resultado.totalCaracteres} <br>
            Maiúsculas: ${resultado.maiusculas} <br>
            Minúsculas: ${resultado.minusculas}
            Quantidade de palavras: ${resultado.numeroPalavras}`;
})
