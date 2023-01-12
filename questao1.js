function ultimaParada(combustivel,consumo,postosDeGasolina) {
  
    const kilometrosTotal = combustivel * consumo // Fiz isso para saber quantos kilometros no total ainda restam
    
    const [x, ...xs] = postosDeGasolina.sort((a,b)=> b-a); //ordenei os postos de gasolina do maior para o menor
   
    if(x > kilometrosTotal) {
      return ultimaParada(combustivel, consumo, xs)
    } else if (x <= kilometrosTotal){
      return x // uso da recursividade para achar o posto mais distante possivel 
    }else{
      return -1
    }  
  }

console.log(ultimaParada(8, 2, [20, 10]))
console.log(ultimaParada(5, 3, [5, 10, 15, 18]))
console.log(ultimaParada(22, 4, [2, 3, 5, 10, 12, 14, 16, 20, 44, 130]))

// Você e seu time estão desenvolvendo um sistema de indicações de postos de gasolina que ficam próximos da localização atual do veículo. No modo de direção “viagem”, a funcionalidade a ser desenvolvida é de indicar ao condutor o posto mais distante possível dentro do limite atual de combustível. E caso não exista posto de gasolina, retornar -1

// A pessoa responsável por fazer a especificação do sistema informou que você terá as seguintes informações: consumo médio de combustível, quantidade de combustível restante no veículo e um array contendo distâncias dos postos de gasolinas.

// Exemplo:
// Combustivel (em litros): 2
// Consumo médio (km/l): 8
// Postos de Gasolina (km): [2, 15, 22, 10.2]