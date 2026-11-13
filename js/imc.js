export default function imc() {
    const botaoImc = document.getElementById("calcularImc");
    const resultadoImc = document.querySelector("#resultadoImc");

    botaoImc.addEventListener("click", function () {
        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);

        // 🔍 Validação dos campos
        const erro = validarCampos(peso, altura);
        if (erro) {
            mostrarResultado(erro, "alertaVermelho");
            return;
        }

        const resultado = calcularIMC(altura, peso);
        mostrarResultado(resultado.classificacao, resultado.cor);
    });

    function mostrarResultado(mensagem, cor) {
        resultadoImc.innerHTML = mensagem;
        resultadoImc.classList.remove("alertaVermelho", "alertaAmarelo", "alertaVerde");
        resultadoImc.classList.add(cor);
    }
}

// Função de validação
function validarCampos(peso, altura) {
    if (isNaN(peso) || isNaN(altura)) {
        return "Informe valores numéricos!";
    }
    if (peso <= 0 || altura <= 0) {
        return "Peso e altura devem ser maiores que zero!";
    }
    if (altura > 3) {
        return "Altura parece incorreta (em metros).";
    }
    if (peso > 500) {
        return "Peso parece incorreto.";
    }
    return null;
}

// 📊 Cálculo
function calcularIMC(altura, peso) {
    const valorIMC = peso / (altura * altura);
    let classificacao, cor;

    if (valorIMC < 18.5) {
        classificacao = "Magreza";
        cor = "alertaVermelho";
    } else if (valorIMC < 24.9) {
        classificacao = "Normal";
        cor = "alertaVerde";
    } else if (valorIMC < 29.9) {
        classificacao = "Sobrepeso";
        cor = "alertaAmarelo";
    } else {
        classificacao = "Obesidade";
        cor = "alertaVermelho";
    }

    // Opcional: adicionar o valor do IMC com 2 casas decimais
    console.log(`Valor IMC: ${valorIMC} - ${valorIMC.toFixed(2)}`);

    return {
        classificacao: `${classificacao} (${valorIMC.toFixed(2)})`,
        cor
    };
}
