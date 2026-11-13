document.addEventListener('DOMContentLoaded', () => {
    const listaMoedas = document.getElementById('lista-moedas');
    const loadingDiv = document.getElementById('loading');
    const apiURL = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json';

    async function buscarMoedas() {
        try {
            loadingDiv.style.display = 'block';
            const response = await fetch(apiURL);
            
            if (!response.ok) {
                throw new Error(`Erro na rede: ${response.statusText}`);
            }

            const data = await response.json();
            const moedas = data.value;

            listaMoedas.innerHTML = '';
            loadingDiv.style.display = 'none';

            if (moedas && moedas.length > 0) {
                moedas.forEach(moeda => {
                    const item = document.createElement('li');
                    item.className = 'moeda-item';
                    item.innerHTML = `
                        <span class="simbolo">${moeda.simbolo}</span>
                        <span>${moeda.nomeFormatado}</span>
                    `;
                    // Adiciona o símbolo como um atributo de dados para facilitar a recuperação
                    item.dataset.simbolo = moeda.simbolo; 
                    listaMoedas.appendChild(item);

                    // Adiciona o evento de clique
                    item.addEventListener('click', () => {
                        window.location.href = `cotacao.html?moeda=${moeda.simbolo}`;
                    });
                });
            } else {
                listaMoedas.innerHTML = '<li>Nenhum dado de moeda encontrado.</li>';
            }
        } catch (error) {
            console.error('Erro ao buscar as moedas:', error);
            loadingDiv.style.display = 'none';
            listaMoedas.innerHTML = `<li style="color: red;">Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.</li>`;
        }
    }

    buscarMoedas();
});