// Dada um texto qualquer e um lista de termos de pesquisa (sequencia de caracteres), retorne os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.

// Exemplo:

// String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

// Lista de termos: ["a", "em", "i", "el"]

// K: 2

// Resultado: ["i", "a"]

// Explicação:

// Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2, retornamos "i" e "a" ordenados conforme a quantidade de ocorrências de cada termo.

// Obs: Quando houver termos com quantidades iguais, priorizar o retorno de acordo com a ordem de ocorrência do termo na string.

function calculaTopOcorrenciasDeQueries(texto,queries,k) {
    
    var list = []
    var dictionary = []

    for (let j = 0; j < queries.length; j++) {

        obj = new Object();
        let i = Object.values(texto).filter((x) => x==queries[j]) // filtro os elementos do texto que sao iguais aos queries
        obj.indice = texto.indexOf(queries[j])
        obj.caracther = queries[j]
        obj.nOcorr = i.length
        dictionary = dictionary.concat(obj)
      // agrupo um os queries em um objeto, que se conectam com seus numeros de ocorrencias, e o indice de sua ocorrencia 
       
    }
    dictionary = dictionary.sort(ordena) // ordeno eles do maior para o menor, baseado no numero de ocorrencia
    dictionary = dictionary.slice(0, k) // deixo o dicionario com apenas os termos resultantes, do maior até k, o parametro configuravel
    
    for (let i = 0; i < k; i++) {
        list = list.concat(dictionary[i].caracther) 
    } // um loop final para concatenar os queries na lista final
    return list
}
const ordena = (a,b) => {
    if(a.nOcorr == b.nOcorr) {
        return a.indice - b.indice
    } else {
        return b.nOcorr - a.nOcorr
    } // funcao para ordenar a lista final 
}

console.log(calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",["a", "em", "i", "el"], 2))

