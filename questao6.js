//  Dizemos que um número natural X esconde o Y quando, ao apagar alguns algarismos de X, o número Y aparece. Por exemplo, o número 12345 esconde o número 235, uma vez que pode ser obtido ao apagar os números 1 e 4. Por outro lado, ele não esconde o número 154.

// A imagem demonstra números: 1,2,3,4,5 todos estão em azul, mas o número 1 e 4 estão com um risco vermelho.

// Escreva um código que recebe dois números e que retorna um booleano dizendo se o primeiro esconde o segundo.

function checaNumeroEscondido(numero,numeroOculto) {

    var finalList = ""
    numero = numero + ""
    numeroOculto = numeroOculto + "" // transformo os numeros inseridos em string para manusear eles de maneira mais facil na lista final
    
 
    for (let i = 0; i < numero.length; i++) {
     for(let j = 0; j < numeroOculto.length; j++){

            if(finalList.length>=numeroOculto.length) {
                break // um break para caso haja elementos repetidos no numero y e x, nao de erro no programa e ficar somando de forma errada, caso ele seja retirado, o teste de '33333' com '33' dara false.
            } 
                if(numero[i] == numeroOculto[j]) {
                finalList += numero[i] 
                break // percorro os elementos de ambas strings, se forem iguais, adiciono o numero atual a lista final
            }
        }
    }
    if(finalList == numeroOculto) {
      return true // ultima etapa de verificacao, ja que essa verificacao previne o caso do numero 154 do enunciado, e tambem de diversos outros.
    } else if(numero == undefined && numeroOculto == undefined) {
        return true
    } else {
       return false
    }
 }

 console.log(checaNumeroEscondido(3145, 15))


