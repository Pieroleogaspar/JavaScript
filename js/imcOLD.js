export default function imc(){
    const botaoImc = document.getElementById("calcularImc")
    const resultadoImc = document.querySelector("#resultadoImc")

    botaoImc.addEventListener("click", function(){
        const peso = document.getElementById("peso").value
        const altura = document.getElementById("altura").value
        let resultado = CalcularIMC(altura, peso)

        //console.log(peso + " : " + altura + " : " + resultado.classificacao + " : " + resultado.cor)
        resultadoImc.innerHTML = resultado.classificacao
        resultadoImc.classList.remove("alertaVermelho","alertaAmarelo","alertaVerde")
        resultadoImc.classList.add(resultado.cor)
    })
}

function CalcularIMC(altura, peso)
{
    let valorIMC
    let classificacao
    let cor

    valorIMC = peso / (altura * altura)
    console.log("Valor IMC: " + valorIMC + " - " + valorIMC.toFixed(2))
    if(valorIMC < 18.5 ) {
        classificacao = "Magreza"
        cor = "alertaVermelho"
    }
    else if(valorIMC < 24.9)
    {
        classificacao = "Normal"
        cor = "alertaVerde"
    }
    else if (valorIMC < 29.9)
    {
        classificacao = "Sobrepeso"
        cor = "alertaAmarelo"
    }
    else
    {
        classificacao = "Obesidade"
        cor = "alertaVermelho"
    }

    return {classificacao, cor}
}