// Um grande amigo seu mora numa cidade pequena, onde existem apenas duas empresas de táxi - a Empresa 1 e a Empresa 2. Ambas mudam suas taxas a cada dia e calculam o valor de suas corridas da seguinte forma: uma taxa fixa mais um valor por quilômetro rodado.
// Seu amigo é fisioterapeuta e pega táxis diariamente para visitar seus clientes ao redor da cidade. Você decidiu escrever um código para ajudá-lo a decidir qual empresa escolher para cada uma das corridas, baseado no preço.

// Sua função receberá 4 valores: TF1 (a taxa fixa da empresa 1), VQR1 (o valor por quilômetro rodado da empresa 1), TF2 (a taxa fixa da empresa 2), VQR2 (o valor por quilômetro rodado da empresa 2), todos em formato string. Seu retorno deve ser uma string em uma das seguintes formas:

// “Tanto faz” - para o caso de o valor das duas empresas para qualquer corrida ser igual
// “Empresa 1” - se o valor da Empresa 1 for sempre menor que o da Empresa 2
// “Empresa 2” - para o caso contrário do citado acima
// “Empresa Xpto quando a distância < N, Tanto faz quando a distância = N, Empresa Ypto quando a distância > N” para o caso de a escolha depender da distância a ser percorrida (onde Xpto e Ypto representa 1 ou 2 e N representa a distância).
// Exemplo:
// TF1 = 2,50
// VQR1 = 1,00
// TF2 = 5,00
// VQR2 = 0,75
// Output:
// “Empresa 1 quando a distância < 10.0, Tanto faz quando a distância = 10.0, Empresa 2 quando a distância > 10.0”

function escolheTaxi(tf1,vqr1,tf2,vqr2) {
    tf1Float = parseFloat(tf1)
    tf2Float = parseFloat(tf2)
    vqr1Float = parseFloat(vqr1)
    vqr2Float = parseFloat(vqr2) // converto todos os valores para float
    
    var eq1 = Math.abs(vqr1Float - vqr2Float)
    var eq2 = Math.abs(tf1Float - tf2Float)
    var x = eq2/eq1 // uma especie de sistemas de equacao, onde o x sera o ponto de interseccao entre as duas retas, para saber quando uma empresa sera melhor que a outra
    
    var xString = x.toFixed(2)
    xString = xString + ""
    if(xString.endsWith('0')) {
        xString = parseFloat(xString)
        xString = x.toFixed(1)
    } // fiz isso para consertar os valores do submit solution, estava dando 10.00 e precisava ser 10.0, tambem com 7.1 que precisava ser 7.14

    var eq3 = tf1Float + vqr1Float*x
    var eq4 = tf2Float + vqr2Float*x
    
    if(eq3 == eq4) {
        xMais = x+1// adiciono +1 no x para saber qual empresa sera melhor
        eq3 = tf1Float + vqr1Float*xMais
        eq4 = tf2Float + vqr2Float*xMais
        if(eq3 < eq4) {
            return `Empresa 2 quando a distância < ${xString}, Tanto faz quando a distância = ${xString}, Empresa 1 quando a distância > ${xString}`
        } else if(eq4 < eq3) {
            return `Empresa 1 quando a distância < ${xString}, Tanto faz quando a distância = ${xString}, Empresa 2 quando a distância > ${xString}`
        } else {
            return "Tanto faz"
        }
    } else if(eq3 > eq4) {
        return "Empresa 2"
    } else if (eq3 < eq4) {
        return "Empresa 1"
    } else {
      return "Tanto faz"
    }
}
console.log(escolheTaxi(12, 2, 15, 1))
