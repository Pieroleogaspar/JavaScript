export default function btus(){
    var botaoBtus = document.querySelector("#calcularBtus")
    var resultadoBtus = document.querySelector("#resultadoBtus")

    botaoBtus.addEventListener("click", function(){
        const largura = document.getElementById("largura").value
        const comprimento = document.getElementById("comprimento").value
            
        // Verificar se os valores são válidos
        if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
            alert("Por favor, insira valores válidos para largura e comprimento.")
            return
        }

        // Calcular a área do cômodo
        const area = largura * comprimento

        // Determinar o fator de correção com base na incidência de sol
        const solManha = document.getElementById('sol-manha').checked
        const solTarde = document.getElementById('sol-tarde').checked

        if(!solManha && !solTarde) {
            alert("Por favor, selecione se o cômodo recebe sol da manhã e/ou da tarde.")
            return
        }
        
        let fatorSolar = 600
        if(solTarde) {
            fatorSolar = 800
        }

        let resultado = area * fatorSolar

        resultadoBtus.innerHTML = resultado + " BTUs"
        resultadoBtus.classList.add("alertaVerde")
    })
}
