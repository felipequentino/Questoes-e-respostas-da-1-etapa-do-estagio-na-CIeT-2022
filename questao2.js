function valorEstaEntre(value) {
    return value <= 500 && value >= 20;
  } // Funcao para pegar os valores entre os limites explicitados pelo enunciado
  
  function retornaMenorEMaiorValorDeVendas(args) {
    var lista = []
    
    for(i=0 ; i < args.length; i++) {
      
      lista = lista.concat(args[i])
      lista = lista.filter(valorEstaEntre)
  // funcao para concatenar os valores da lista e filtrarem os que fogem do parametro
    }  
    if(lista.length == 0) {
      return [] // retornar um array vazio caso a lista tenha se tornado vazia
    } else {
        return [Math.min(...lista), Math.max(...lista)] 
      //retornar o maior e menor numero
    }
  }

console.log(retornaMenorEMaiorValorDeVendas([200, 300, 1000, 50, 501]))
//   Você está trabalhando para uma empresa que fornece materiais escolares e precisa da sua ajuda para entrar no mundo digital. Como primeira atividade, você identificou que não existe uma funcionalidade que é muito importante para a empresa ter mais controle sobre os valores dos produtos vendidos. Esta funcionalidade consiste em descobrir o maior e o menor valor dos produtos vendidos em um período de tempo, para cada vendedor.

//   Os valores das vendas que devem ser consideradas podem variar entre 20 e 500 reais e estão agrupados por vendedores. Além disso, deve-se ignorar as devoluções, que estão indicadas com o valor 0.
  
//   A sua função/método deverá receber uma lista vendas agrupadas por vendedores, (e.g. [[200, 100], [300]]) e retornar um array onde a primeira posição contém o menor valor e a segunda posição o maior valor (e.g. [100, 300]).
  
//   Mas preste atenção! Algum vendedor pode não ter realizado vendas no período.