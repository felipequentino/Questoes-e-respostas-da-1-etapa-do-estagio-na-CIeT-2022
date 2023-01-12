// Uma empresa fabrica painéis de LED compostos por quadrados de 1 cm de lado. Nos vértices de cada quadrado fica um LED, sendo que o tamanho de cada painel é escolhido pelo cliente conforme a sua necessidade. A imagem abaixo mostra um painel de 2 cm por 4 cm, composto por 15 LEDs no total.

// Atualmente os funcionários desta fábrica perdem muito tempo (que poderia ser utilizado para inovação) com o cálculo manual desses painéis. A alta diretoria da fábrica decidiu então contratar você para evoluir e construir um cálculo automatizado, modernizando assim os sistemas deles.

// Considerando um painel de n por m centímetros, desenvolva um código para calcular o número total de LEDs no painel.

// A imagem demonstra um painel de leds que possuem 4 quadrados agrupados em cima e 4 embaixo onde em cada ponta possuem 4 pontos vermelhos de led totalizando 15 pontos.

// OBS:

// Os valores da altura e da largura devem ser recebidos por meio de parâmetros

function calculaTotalLeds(altura,largura) {
   
    if(largura == 0 || altura == 0) {
        return 0 
    } else {
        const alturaLed = altura + 1
        const larguraLed = largura + 1
        return alturaLed * larguraLed
      // a quantidade de led nos paines sempre sera (1+largura) * (1 + altura). em um painel 3x3, tera 16 leds, que é a multiplicacao de 4x4, vulgo (3+1) * (3+1). excluindo apenas o caso de que a largura ou a altura seja 0, neste cenario, a soma nao acontece e a funcao retorna 0.
    }
}

console.log(calculaTotalLeds(2, 4))

