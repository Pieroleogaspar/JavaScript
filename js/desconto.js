const calcularBtn = document.getElementById('calcular-btn')

calcularBtn.addEventListener('click', function() {

    // 1. Obter os valores dos campos de entrada
    const valorProduto = parseFloat(document.getElementById('valor-produto').value);
    const percentualDesconto = parseFloat(document.getElementById('percentual-desconto').value);
    const resultadoDiv = document.getElementById('resultado');

    // 2. Validar as entradas
    if (isNaN(valorProduto) || isNaN(percentualDesconto)) {
        resultadoDiv.textContent = "Por favor, insira valores numéricos válidos.";
        resultadoDiv.style.color = 'red';
        return;
    }

    if (percentualDesconto < 0 || percentualDesconto > 100) {
        resultadoDiv.textContent = "O percentual de desconto deve estar entre 0 e 100.";
        resultadoDiv.style.color = 'red';
        return;
    }

    // 3. Calcular o valor final
    const valorDesconto = (valorProduto * percentualDesconto) / 100;
    const valorFinal = valorProduto - valorDesconto;

    // 4. Exibir o resultado com duas casas decimais
    resultadoDiv.textContent = `O valor final com desconto é R$ ${valorFinal.toFixed(2)}`;
    resultadoDiv.style.color = '#007bff';
});