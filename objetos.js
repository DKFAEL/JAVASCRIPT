/**
 * Objeto é uma estrutura que permite organizar dados na forma de chave-valor
 */

let end = { rua : 'RUA principal ',
numero: 23,
estado :'BA',
complemento : 'sem complemento',
cep : '4720374'}
let pessoa = {
    nome: 'Felipe',
    idade: 23,
    cpf : '123.123.123-00',
    altura: 156,
    endereco:{...end}, // ... OPERADOR DESTRUCTURING
    solteiro: true,
    habilidaddes : ['React', 'java', 'JavaScript', 'Rust', 'Golang  '],
    cumprimentar () {
        /**
         * Quando eu desejo referenciar o mesmo objeto dentro dele mesmo, eu utlizo a palavra chave 'this'
         */
        console.log(`Olá meu nome é ${this.nome}`)
    }
}
 /* console.log (end)
console.log(pessoa.endereco.estado)
pessoa.cumprimentar()
pessoa.nome = 'Pablo Escobar'
pessoa.cumprimentar()
pessoa.habilidaddes.push('angular')
console.log (pessoa.habilidaddes)
console.log(pessoa['cpf']) */
console.log (end.rua)
console.log (pessoa.endereco.rua)

pessoa.endereco.rua = 'Rua Secundaia'
console.log(pessoa.endereco.rua)
console.log(end.rua)