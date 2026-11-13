
async function listaDeputados() {
  document.getElementById("animacao").style.display = 'block'
  document.getElementById('lista').innerHTML = ""

  let comp = ""
  if (document.getElementById("uf").value != "") { comp = "siglaUf=" + document.getElementById("uf").value + "&" }
  if (document.getElementById("partido").value != "") { comp += "siglaPartido=" + document.getElementById("partido").value + "&" }
  if (document.getElementById("sexo").value != "") { comp += "siglaSexo=" + document.getElementById("sexo").value + "&" }

  try {
    const response = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados?' + comp + 'ordem=ASC&ordenarPor=nome')
    const data = await response.json()

    data.dados.forEach(valor => {
      let agrupados = `${valor.id}|${valor.urlFoto}|${valor.nome}|${valor.siglaPartido}|${valor.siglaUf}|${valor.email}`
      let botao = `<button type='button' class='btn btn-success botaoDetalhes' data-title='${agrupados}' data-bs-toggle='modal' data-bs-target='#dadosDeputado'><i class='bi bi-person-lines-fill'></i> Detalhes</button>`
      let tabela = `<tr>
        <td class=''><img src=${valor.urlFoto} class='fotinha'></td>
        <td class='align-middle fs-5'>${valor.nome}</td>
        <td class='align-middle fs-5'>${valor.siglaPartido}</td>
        <td class='align-middle fs-5'>${valor.siglaUf}</td>
        <td class='align-middle'>${botao}</td>
        </tr>`
      document.getElementById('lista').insertAdjacentHTML('beforeend', tabela)
    })
  } catch (error) {
    console.error('Erro:', error)
  }
  document.getElementById("animacao").style.display = 'none'
}

listaDeputados()

document.getElementById("uf").addEventListener('change', function () {
  listaDeputados()
})
document.getElementById("partido").addEventListener('change', function () {
  listaDeputados()
})
document.getElementById("sexo").addEventListener('change', function () {
  listaDeputados()
})
