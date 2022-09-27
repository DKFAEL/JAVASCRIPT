
// Criar um novo array
const numeros = []

// Criar um loop que execute 6 vezes   
for( let i = 1; i <= 6; i++) {
    const n =parseInt(prompt(`Digite ${i}º numero`))
    numeros.push(n)
}


//SEPARAR OS PARES DOS IMPARES

const par = []
const impar = []

// percorrer o array com os números informados
// criar um variavel que guardará os valores de cada posição do array
// o array que iremos pecorrer

for (let numero of numeros) {
    /**
     * Separ os valores pares dos ímpares
     * colocandocada  valor noseu respectivos array
     */
    if (numero % 2 == 0) {
        par.push(numero)
    }
    else {
        impar.push(numero)
    }
}
alert(`Nós temos ${par.length} Valores pares:${par.join(' , ')} `)
alert(`Nós temos ${impar.length} Valores impares: ${impar.join(' , ')}`)