$(function () {
    $("#btnMostrar").click(function () {
        $("#box").show()
    })

    $("#btnEsconder").click(function () {
        $("#box").hide()
    })

    $("#btnAlternar").click(function () {
        $("#box").toggle()
    })

    $("#btnFade").click(function () {
        $("#box").fadeToggle(800) // alterna fade in/out em 800ms
    })

    $("#btnSlide").click(function () {
        $("#box").slideToggle(800) // alterna deslizar em 800ms
    })

    $("#btnAnimar").click(function () {
        $("#box").animate({
            width: "300px",
            height: "300px",
            opacity: 0.5,
            borderRadius: "50%"
        }, 2000).animate({
            width: "150px",
            height: "150px",
            opacity: 1,
            borderRadius: "10%"
        }, 2000)
    })


    $("#btnIncluir").click(function () {
        var nome = $("#nome").val()
        if (nome) {
            $("#lista").append("<li>" + nome + "</li>") // adiciona no final
            $("#nome").val("").focus() // limpa e foca
        }
    })
})