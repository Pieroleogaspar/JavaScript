$(document).ready(function () {

  listaDeputados()

  function listaDeputados() {

    $('#lista').html("")
    $('#animacao').show()

    let comp = ""
    if ($("#uf").val() != "") { comp = "siglaUf=" + $("#uf").val() + "&"; }
    if ($("#partido").val() != "") { comp += "siglaPartido=" + $("#partido").val() + "&"; }
    if ($("#sexo").val() != "") { comp += "siglaSexo=" + $("#sexo").val() + "&"; }

    // LER OS EVENTOS
    $.getJSON('https://dadosabertos.camara.leg.br/api/v2/deputados?' + comp + 'ordem=ASC&ordenarPor=nome', function (data) {

      $.each(data["dados"], function (chave, valor) {

        let agrupados = `${valor.id}|${valor.urlFoto}|${valor.nome}|${valor.siglaPartido}|${valor.siglaUf}|${valor.email}`

        // É necessário usar o acento grave para envolver o texto para fazer interpolação em jQuery
        let botao = `<button type='button' class='btn btn-success botaoDetalhes' data-title='${agrupados}' data-bs-toggle='modal' data-bs-target='#dadosDeputado'><i class='bi bi-person-lines-fill'></i> Detalhes</button>`

        let tabela = "<tr>\
          <td class=''><img src=" + valor.urlFoto + " class='fotinha'></td>\
          <td class='align-middle fs-5'>"+ valor.nome + "</td>\
          <td class='align-middle fs-5'>" + valor.siglaPartido + "</td>\
          <td class='align-middle fs-5'>" + valor.siglaUf + "</td>\
          <td class='align-middle'>" + botao + "</td>\
          </tr>"

        $('#lista').append(tabela)
      })
      $('#animacao').hide()
    })
  }

  $("#uf").on('change', function () {
    //var selecionado = $(this).val();
    listaDeputados()
  })
  $("#partido").on('change', function () {
    listaDeputados()
  })
  $("#sexo").on('change', function () {
    listaDeputados()
  })

  $("#lista").on('click', '.botaoDetalhes', function () {
    let separados = $(this).attr("data-title").split("|");
    let id = separados[0];
    $('#fotoPrincipal').attr("src", separados[1]);
    $('.nomePrincipal').html(separados[2]);
    $('.partidoPrincipal').html("" + separados[3]);
    $('.ufPrincipal').html("" + separados[4]);

    let email = separados[5];

    let urlComplemento = "https://dadosabertos.camara.leg.br/api/v2/deputados/" + id;
    $.getJSON(urlComplemento, function (data) {

      let sexo = "Masculino";
      if (data["dados"].sexo == "F") { sexo = "Feminino"; }
      let dataNasc;
      dt = data["dados"].dataNascimento.split("-");
      dataNasc = dt[2] + "/" + dt[1] + "/" + dt[0];

      let complemento = `<ul class='list-group'>
        <li class='list-group-item'>Nome civil: ${data["dados"].nomeCivil}</li>
        <li class='list-group-item'>Sexo: ${sexo}</li>
        <li class='list-group-item'>Data de nascimento: ${dataNasc}</li>
        <li class='list-group-item'>Escolaridade: ${data["dados"].escolaridade}</li>
        <li class='list-group-item'>E-mail: ${email}</li>
        </ul>`;

      $('.infosComplementares').html(complemento);

    }); // fim getJson
  });

});