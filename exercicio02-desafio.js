const peso = Number(prompt('Qual a sua altura?')) 
const mensagem = `
informe seu Sexo :
Digite M para MULHER
digite H para HOMEM `

const sexo= prompt(mensagem)

console.log(peso)
console.log(sexo)

if (sexo == 'M' ) {
    const mulher = ( 62.1* peso)  - 44.7;
    alert (`O peso ideal seria ${mulher}`)
}
else if (sexo == 'H') {
    const homem =(72.7 * peso ) - 58;
    alert (`O peso ideal seria ${homem}`)
}
