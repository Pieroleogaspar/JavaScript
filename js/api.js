// USANDO THEN
// fetch('http://localhost/api')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Não foi possível carregar o arquivo.')
//         }
//         console.log(response);
//         return response.json()
//     })
//     .then(data => {
//         console.log(data.nome)
//         console.log(data.idade)
//         console.log(data.profissao)
//     })
//     .catch(error => {
//         console.error('Erro:', error)
//     })

// usando async await
// json simples

async function fetchData() {
    try {
        const resposta = await fetch('https://limeiraweb.com.br/api/contato/14',{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!resposta.ok) {
            throw new Error('Não foi possível carregar o arquivo.')
        }
        const data = await resposta.json()
        console.log(data)

        // incluir validação do sexo. se for m ou M escrever Masculino. Se for f ou F, escrever Feminino
        if (data.sexo.toLowerCase() === 'm') {
            data.sexo = 'Masculino'
        } else if (data.sexo.toLowerCase() === 'f') {
            data.sexo = 'Feminino'
        } else {
            data.sexo = 'Outro' 
        }

        // Preenche os elementos usando os IDs
        document.getElementById('nome').innerHTML = 'Nome: <strong> ' + data.nome + '</strong>';
        document.getElementById('celular').textContent = 'WhatsApp: ' + data.celular;
        document.getElementById('email').textContent = 'E-mail: ' + data.email;
        document.getElementById('sexo').textContent = 'Sexo: ' + data.sexo;
        document.getElementById('idade').textContent = 'Idade: ' + data.idade;

    } catch (error) {
        console.error('Erro:', error)
    }
}

// array com objetos

async function fetchAllData() {
    try {

        var tabela = document.getElementById("linhas")

        const response = await fetch('https://limeiraweb.com.br/api/contato')
        if (!response.ok) {
            throw new Error('Não foi possível carregar o arquivowww.')
        }
        const data = await response.json()
        //console.log(data)
        data.forEach(obj => {
            // console.log("Nome: ", obj.nome)
            // console.log("Idade: ", obj.idade)
            // console.log("Profissão: ", obj.cidade)

            var novaLinha = tabela.insertRow()
            // novaLinha.insertCell(0).innerHTML = '<img src="' + obj.foto + '" alt="Foto de ' + obj.nome + '">'
            novaLinha.insertCell(0).innerHTML = obj.nome
            novaLinha.insertCell(1).innerHTML = obj.celular
            novaLinha.insertCell(2).innerHTML = obj.email
            novaLinha.insertCell(3).innerHTML = obj.sexo
            novaLinha.insertCell(4).innerHTML = obj.idade
        });
    } catch (error) {
        console.error('Erro:', error)
    }
}
fetchAllData()


// async function fetchData() {
//     try {

//         var tabela = document.getElementById("linhas")

//         const response = await fetch('https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome')
//         if (!response.ok) {
//             throw new Error('Não foi possível carregar o arquivo.')
//         }
//         const data = await response.json()
//         data.dados.forEach(obj => {
//             var novaLinha = tabela.insertRow()
//             novaLinha.insertCell(0).innerHTML = '<img src="' + obj.urlFoto + '" width="80" alt="Foto de ' + obj.nome + '">'
//             novaLinha.insertCell(1).innerHTML = `
//             Nome: ${obj.nome}<br>
//             Partido: ${obj.siglaPartido} / ${obj.siglaUf} <br>
//             E-mail: ${obj.email}`      
//         })
//     } catch (error) {
//         console.error('Erro:', error)
//     }
// }

// múltiplos

// async function fetchData() {
//     try {
//         const response = await fetch('http://127.0.0.1:5500/utilitarios/api/objeto-com-array.json')
//         if (!response.ok) {
//             throw new Error('Não foi possível carregar o arquivo.')
//         }
//         const data = await response.json()
//         console.log('Nome:', data.nome)
//         console.log('Idade:', data.idade)
//         //console.log('Front-end:', data['front-end'].join(', '))
//         console.log('Front-end:')
//         data['front-end'].forEach(item => {
//             console.log('   -', item)
//         })

//         //console.log('Back-end:', data['back-end'].join(', '))
//         console.log('Back-end:')
//         data['back-end'].forEach(item => {
//             console.log('   -', item)
//         })

//         console.log('Endereço:')
//         console.log('   Rua:', data.endereço.rua)
//         console.log('   Bairro:', data.endereço.bairro)
//         console.log('   Cidade:', data.endereço.cidade)
//     } catch (error) {
//         console.error('Erro:', error)
//     }
// }

fetchData();
