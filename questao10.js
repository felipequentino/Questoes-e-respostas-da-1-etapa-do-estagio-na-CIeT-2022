// Sua equipe está trabalhando em um app de streaming de músicas e uma das funcionalidades é criar um embaralhador de músicas. Uma pesquisa feita pela equipe de UX (experiência do usuário) mostrou que essa é uma das funcionalidades mais importantes para os usuários e por isso foi priorizada a criação de um experimento para testar a melhor solução.

// A ideia é criar vários embaralhadores diferentes e realizar um teste com partes dos usuários (chamado de teste A/B), onde cada grupo de usuários selecionado recebe uma versão e através de pesquisas e métricas de utilização saberemos qual terá a maior aceitação.

// Sua tarefa será desenvolver um desses embaralhadores. Você deve criar uma função que receberá uma lista de pesos que representa as músicas mais ouvidas pelo usuário. Sua função deve retornar uma lista organizada intercalando as músicas mais ouvidas com as músicas menos ouvidas. Por exemplo: (infelizmente nao copiei o resto do enunciado :(

function shuffleMusicas(musicasTocadas) {

    var finalList = []
    for(let listMusicas = musicasTocadas; listMusicas.length > 0; listMusicas.shift() & listMusicas.pop()) {

        listMusicas.sort((a,b)=> a-b) // ordeno a lista para tirar o ultimo e o primeiro depois do loop com o .shift() e o .pop()
        if(Math.max(...listMusicas) == Math.min(...listMusicas)) { // caso haja numeros repetidos, adiciona apenas 1 deles para a lista final ([10,10] => [10])
            finalList = finalList.concat(Math.max(...listMusicas))
        } else {
        finalList = finalList.concat(Math.max(...listMusicas))
        finalList = finalList.concat(Math.min(...listMusicas))
        } //caso nao hajam numeros repetidos, adiciono normalmente o menor e o maior numero para a lista final
    }
    return finalList
}

console.log(shuffleMusicas([10, 5, 29, 1, 2, 30]))
