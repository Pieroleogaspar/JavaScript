function buscarCep() {

   const rua = document.getElementById('rua')
   const bairro = document.getElementById('bairro')
   const cidade = document.getElementById('cidade')
   const uf = document.getElementById('uf')
   const buscaCep = document.getElementById('buscaCep')
   const cep = document.getElementById('cep')
   const mostraErro = document.getElementById('mostraErro')
   const animacao = document.getElementById('animacao')
   animacao.style.display = 'none'
   
   buscaCep.addEventListener('click', async function () {
      animacao.style.display = 'block'
      const cepDigitado = cep.value
      const cepSoNumeros = cepDigitado.replace("-", "") // Remove todos os hífens

      //limparCampos(rua, bairro, cidade, uf, mostraErro) // Limpa os campos antes de fazer a busca

      try {
         // Inicia a requisição AJAX usando o Fetch API com async/await
         const response = await fetch("https://viacep.com.br/ws/" + cepSoNumeros + "/json/");
         const data = await response.json(); // Converte a resposta para JSON

         if (data.erro) {
            mostraErro.textContent = "Endereço não encontrado para o CEP informado";
         } else {
            // Preenche os campos com os dados da resposta
            rua.value = data.logradouro || ''
            bairro.value = data.bairro || ''
            cidade.value = data.localidade || ''
            uf.value = data.uf || ''
         }
      } catch (error) {
         // Trata erros na requisição
         mostraErro.textContent = "Erro ao buscar informações do CEP: " + error
      }
      
      animacao.style.display = 'none'
   })

   // $("#buscaCep").click(function () {
   //    const cepFull = $("#cep").val()
   //    let cep = cepFull.replace("-","")
   //    $.ajax({
   //       type: "GET",
   //       url: "https://viacep.com.br/ws/" + cep + "/json/",
   //       dataType: "json",
   //       success: function (response) {
   //          if(response.erro==true){
   //             $("#mostraErro").html("Endereço não encontrado para o CEP informado")
   //          }
   //          $("#rua").val(response.logradouro)
   //          $("#bairro").val(response.bairro)
   //          $("#cidade").val(response.localidade)
   //          $("#uf").val(response.uf)
   //       },
   //    })
   // })

   // var campoCep = document.querySelector("#cep")
   // campoCep.addEventListener("input", function () {
   //    //console.log("222");
   //    let cep = campoCep.value;
   //    let novoCEP = '';
   //    for (let i = 0; i < cep.length; i++) {
   //       if ((cep[i] >= '0' && cep[i] <= '9') || cep[i] === '-') {
   //          novoCEP += cep[i];
   //       }
   //    }
   //    campoCep.value = novoCEP.slice(0, 9);
   // })

}

const limparCampos = (rua, bairro, cidade, uf, mostraErro) => {
   rua.value = ''
   bairro.value = ''
   cidade.value = ''
   uf.value = ''
   mostraErro.textContent = ''
}

buscarCep()