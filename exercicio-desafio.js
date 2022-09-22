const litros = parseFloat (prompt('Quantos  litros você deseja?')) 
const mensagem = `
informe o tipo de combustível:
Digite A para ÁLCOOL
digite G para GASOLINA `

const metodoDeAbastecimento = prompt(mensagem)

console.log(litros)
console.log(metodoDeAbastecimento)

 
if (metodoDeAbastecimento == 'A' || litros <= 25 ) {
    const abastecer = (litros *1.9 ) * 0.98
    alert (`O Valor do abastecimento e de ${abastecer}`)
}

else if(metodoDeAbastecimento == 'A' || litros > 25 ) {
    const abastecer =  (litros * 1.9) * 0.96
    alert (`O Valor do abastecimento e de ${abastecer}`)
}
else if (metodoDeAbastecimento == 'G' || litros <= 25 ) {
    const abastecer = (litros * 2.7) * 0.97
    alert (`O Valor do abastecimento e de  ${abastecer}`)
}
else (metodoDeAbastecimento == 'G' || litros > 25)
{
    const abastecer = (litros * 2.7) *0.95
    alert (`O Valor do abastecimento e de ${abastecer}`)
}



      
