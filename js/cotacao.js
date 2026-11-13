document.addEventListener('DOMContentLoaded', async () => {
    const tituloMoeda = document.getElementById('titulo-moeda');
    const loadingDiv = document.getElementById('loading-cotacao');
    const cotacaoInfoDiv = document.getElementById('cotacao-info');

    // Função para obter o parâmetro da URL
    const params = new URLSearchParams(window.location.search);
    const simboloMoeda = params.get('moeda');

    if (!simboloMoeda) {
        cotacaoInfoDiv.innerHTML = '<p style="color: red;">Símbolo da moeda não encontrado na URL.</p>';
        loadingDiv.style.display = 'none';
        return;
    }

    // Formata a data atual para o formato MM-DD-YYYY
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês é de 0 a 11, então adicionamos 1
    const ano = hoje.getFullYear();
    const dataFormatada = `${mes}-${dia}-${ano}`;

    // Constrói a URL da API de cotação
    const apiURLCotacao = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda='${simboloMoeda}',dataCotacao='${dataFormatada}')?$top=100&$format=json`;

    tituloMoeda.textContent = `Cotação do ${simboloMoeda}`;

    try {
        loadingDiv.style.display = 'block';
        
        const response = await fetch(apiURLCotacao);
        
        if (!response.ok) {
            throw new Error(`Erro na rede: ${response.statusText}`);
        }

        const data = await response.json();
        const cotacoes = data.value;

        loadingDiv.style.display = 'none';

        if (cotacoes && cotacoes.length > 0) {
            const ultimaCotacao = cotacoes[0];
            cotacaoInfoDiv.innerHTML = `
                <p><strong>Nome da Moeda:</strong> ${ultimaCotacao.nomeFormatado}</p>
                <p><strong>Data da Cotação:</strong> ${ultimaCotacao.dataHoraCotacao.slice(0, 10)}</p>
                <p><strong>Valor de Compra:</strong> R$ ${ultimaCotacao.cotacaoCompra.toFixed(4).replace('.', ',')}</p>
                <p><strong>Valor de Venda:</strong> R$ ${ultimaCotacao.cotacaoVenda.toFixed(4).replace('.', ',')}</p>
            `;
        } else {
            cotacaoInfoDiv.innerHTML = `<p>Cotação não encontrada para a data de hoje.</p>`;
        }
    } catch (error) {
        console.error('Erro ao buscar a cotação:', error);
        loadingDiv.style.display = 'none';
        cotacaoInfoDiv.innerHTML = `<p style="color: red;">Ocorreu um erro ao carregar a cotação.</p>`;
    }
});