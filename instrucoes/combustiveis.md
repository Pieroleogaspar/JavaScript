# Exercício — Álcool ou Gasolina

## Objetivo
Criar a funcionalidade que calcule qual combustível é mais vantajoso: álcool ou gasolina.

## Instruções:
  - No arquivo combustiveis.js, criar uma função exportável chamada alcoolGasolina.
  - Capturar o botão de cálculo usando getElementById().
  - Capturar a área de resultado da página.
  - Adicionar um evento de clique no botão.
  - Ler o valor digitado no campo álcool.
  - Ler o valor digitado no campo gasolina.
  - Calcular a porcentagem do álcool em relação à gasolina. Fórmula: 
      ```javascript
    (preço do álcool / preço da gasolina) * 100.
    ```
  - Se o resultado for maior que 70, exibir: "Abasteça com gasolina"
  - Caso contrário, exibir: "Abasteça com alcool"
  - Alterar a classe CSS do resultado:  
    - alertaVerde para alcool  
    - alertaVermelho para gasolina
  - Mostrar o resultado na tela usando innerHTML.

## Restrições:
  - Os campos não podem estar vazios.
  - Os valores devem ser maiores que zero.
  - Utilizar addEventListener() no botão.
  - Utilizar classList.remove() antes de adicionar a nova classe.
  - Utilizar classList.add() para aplicar a nova classe.

## Estrutura do HTML (calculadoras.html)

Considerar os seguintes elementos:
```html
id="alcool"
id="gasolina"
id="calcular-combustivel"
id="resultado-combustivel"
```
## main.js

No arquivo `main.js` importar e executar a função criada.

