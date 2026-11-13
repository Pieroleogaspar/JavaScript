export default function combustivel(){
    var botaoCombustivel = document.querySelector("#calcularCombustivel")
    var resultadoCombustivel = document.querySelector("#resultadoCombustivel")

    botaoCombustivel.addEventListener("click", function(){
        const gasolina = document.getElementById("gasolina").value
        const alcool = document.getElementById("alcool").value
        let resultado = alcool / gasolina * 100

        let texto = "Abasteça com alcool"
        let cor = "alertaVerde"
        if(resultado > 70)
        {
            texto = "Abasteça com gasolina"
            cor = "alertaVermelho"
        }
        resultadoCombustivel.innerHTML = texto
        resultadoCombustivel.classList.remove("alertaVermelho","alertaVerde")
        resultadoCombustivel.classList.add(cor)
    })
}