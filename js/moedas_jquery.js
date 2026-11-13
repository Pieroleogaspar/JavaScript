$(document).ready(() => {
    const listaMoedas = $('#lista-moedas');
    const loadingDiv = $('#loading');
    const apiURL = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json';

    function buscarMoedas() {
        // Show the loading spinner
        loadingDiv.show();
        
        // Use $.ajax for a more complete jQuery solution
        $.ajax({
            url: apiURL,
            method: 'GET',
            dataType: 'json',
            success: (data) => {
                const moedas = data.value;

                // Clear the list and hide the loading spinner
                listaMoedas.empty();
                loadingDiv.hide();

                if (moedas && moedas.length > 0) {
                    // Use $.each to iterate over the array
                    $.each(moedas, (index, moeda) => {
                        // Create the list item and use jQuery methods for manipulation
                        const item = $('<li>')
                            .addClass('moeda-item')
                            .html(`
                                <span class="simbolo">${moeda.simbolo}</span>
                                <span>${moeda.nomeFormatado}</span>
                            `)
                            .data('simbolo', moeda.simbolo) // Set the data attribute
                            .on('click', () => {
                                window.location.href = `cotacao.html?moeda=${moeda.simbolo}`;
                            });
                        
                        listaMoedas.append(item);
                    });
                } else {
                    listaMoedas.html('<li>Nenhum dado de moeda encontrado.</li>');
                }
            },
            error: (jqXHR, textStatus, errorThrown) => {
                console.error('Erro ao buscar as moedas:', textStatus, errorThrown);
                loadingDiv.hide();
                listaMoedas.html('<li style="color: red;">Ocorreu um erro ao carregar os dados. Tente novamente mais tarde.</li>');
            }
        });
    }

    buscarMoedas()
})