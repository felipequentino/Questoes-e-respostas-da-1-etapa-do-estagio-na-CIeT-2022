function calculaNumeroDaSenha(senha) {

  var lista = []
  var finalList = [];
  for (let j = 0; j < senha.length; j++) {
    for (let i = 0; i < senha.length; i++) {
      lista += senha[i][j]
    }
    let um = Object.values(lista).filter((x) => x==1)
    let zero = Object.values(lista).filter((x) => x==0)

       if(um.length >= zero.length) {
       finalList += 1
     } else {
       finalList += 0
     }
    
    lista =[] 
  } // Criei dois for, que percorrem o primeiro elemento de cada String e armazenam o elemento predominante, 0 ou 1, e depois limpam esta lista e vao para a segunda coluna e fazem a mesma coisa, até acabar as colunas. Abaixo, uma função para transformar numeros binarios para decimais

    const decimal = (binstr) => {
    const binlista = binstr.split("").reverse()
    const declista = binlista.map((x,indice)=>parseInt(x)*2**indice)
    const dec = declista.reduce((acc,x)=>acc+x,0)
    return dec
  } 
  return decimal(finalList)
}
console.log(calculaNumeroDaSenha([0110100000, 1001011111, 1110001010, 0111010101, 0011100110, 1010011001, 1101100100, 1011010100, 1001100111, 1000011000]))
// Durante uma expedição tecnológica, sua equipe encontrou o que parece ser a senha que lhes dá acesso a um grande tesouro digital. Por sorte, sua equipe é formada pelas pessoas mais feras em programação e vocês rapidamente descobriram como decifrá-la.

// Com a possibilidade de que vocês encontrem mais códigos contendo outras senhas, você foi designado à tarefa de desenvolver um algoritmo que decifra os códigos para não precisarem fazer isso de forma manual.

// A senha é representada por um número binário de 10 dígitos formado pelo dígito predominante de cada coluna. Caso a coluna tenha a mesma quantidade de dígitos 0 e 1, deve se considerar o número 1.

// Exemplo: A primeira coluna da lista tem como dígito predominante o número 1, sendo assim, o primeiro dígito - dos 10 - da senha é 1.

// 0110100000
// 1001011111
// 1110001010
// 0111010101
// 0011100110
// 1010011001
// 1101100100
// 1011010100
// 1001100111
// 1000011000

// Desenvolva um algoritmo que receba um array de valores binários (como o exemplo acima) e retorne a representação decimal da senha.