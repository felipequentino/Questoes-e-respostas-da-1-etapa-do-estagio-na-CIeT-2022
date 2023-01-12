// Ao se comparar se uma string é maior que outra, considera-se a ordem alfabética ou lexicográfica. No caso, “abcd” < “adbc” < “bacd”.

// Escreva uma função que receba uma string A e retorne uma string B, sendo que B é composta pelos mesmos caracteres que A reordenados.

// B deve obedecer às seguintes condições:

// Ser maior que A
// Ser a menor string possível que cumpra as condições acima
// Caso não seja possível encontrar uma string que cumpra as condições, retorne a string “sem reposta”.
// Por exemplo:

// A = “ab”
// Logo, o resultado será “ba”

// A = “abcde”
// Logo, o resultado será “abced”

// A = “ba”
// Nesse caso, o resultado será “sem resposta"

function menorStringMaior(name) {
    var listLocale = ""
    var list = name
    for (let i = name.length-1; i > 0; i--) {
        if(list[i] > list[i-1]) {
            var j = i-1
            var str = name.split('')
            var aux = str[i]
            str[i] = str[j];
            str[j] = aux; // substituo 2 caracteres para depois ordenar do menor para o maior
            str = str.join('')
            listLocale = str.slice(i,name.length) // separo uma lista a partir do caractere substituido que "conta" para frente
            str = str.slice(0,i) // separo uma lista a partir do caractere substituido que "conta" para tras
            listLocale = listLocale.split("")
            listLocale = listLocale.sort((a,b)=> a.localeCompare(b)) // ordenacao do menor para o maior
            listLocale = listLocale.join('')
            str += listLocale
            return str    
        }
                    
    }
    return "sem resposta"
}
console.log(menorStringMaior("qualified"))