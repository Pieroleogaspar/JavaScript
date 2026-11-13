# Exercício — Cálculo de BTUs

## Objetivo
Criar a funcionalidade que calcule a quantidade aproximada de BTUs necessária para um ambiente.

## Instruções:
  - No arquivo `btus.js`, criar uma função exportável chamada `btus`.
  - Capturar o botão de cálculo usando `getElementById()`.
  - Capturar a área de resultado da página.
  - Adicionar um evento de clique no botão.
  - Ler o valor digitado no campo largura.
  - Ler o valor digitado no campo comprimento.
  - Validar se os valores informados são números válidos e maiores que zero.
  - Calcular a área do ambiente usando a fórmula:
    ```javascript
    largura * comprimento
    ```
  - Verificar qual opção de incidência solar foi selecionada:
    - sol da manhã
    - sol da tarde
  - Definir o fator solar:
    - `600` para sol da manhã
    - `800` para sol da tarde
  - Calcular o total de BTUs utilizando a fórmula:
    ```javascript
    area * fatorSolar
    ```
  - Exibir o resultado na tela usando `innerHTML`.
  - Adicionar a classe CSS:
    ```text
    alertaVerde
    ```

## Restrições:
  - Os campos não podem estar vazios.
  - Os valores devem ser maiores que zero.
  - Utilizar `isNaN()` para validar os valores numéricos.
  - Exibir mensagens de erro utilizando `alert()`.
  - O usuário deve selecionar uma opção de incidência solar.

## Estrutura do HTML (calculadoras.html)

Considerar os seguintes elementos:

```html
id="largura"
id="comprimento"
id="sol-manha"
id="sol-tarde"
id="calcularBtus"
id="resultadoBtus"
```

## main.js

No arquivo `main.js` importar e executar a função criada.