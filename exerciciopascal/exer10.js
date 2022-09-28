/**Uma Cia de pulverização utiliza avião para pulverizar lavouras. Os custos de
pulverização dependem do tipo de praga e da área a ser contratada conforme a tabela:
Tipo 1 – ervas daninhas R$ 50,00 por acre;
Tipo 2 – gafanhotos R$ 100,00 por acre;
Tipo 3 – broca R$ 150,00 por acre;
Tipo 4 – todos acima R$ 250,00 por acre.
Se a área a ser pulverizada for superior a 1000 acres, o fazendeiro tem um desconto de
5%. Em adição, qualquer fazendeiro cujo custo for maior do que R$ 750,00 tem um
desconto de 10% sobre o valor que ultrapassar os R$ 750,00. Caso ambos os descontos se
aplicam o da área é calculado antes. Fazer um algoritmo que leia: o tipo de pulverização
(1 a 4) e área a ser pulverizada; e imprima o valor a ser pago. */

let pulverizacao = parseInt(prompt(`Informe o tipo de pulverização: 
1 - Ervas Daninhas
2 - Gafanhotos
3 - Broca
4 - Todos Acima`))
let area = parseFloat(prompt('Informe a área a ser pulverizada em acres.'))
let custo = 0
let desconto = 0

if (pulverizacao == 1){
    custo = area *50
}
else if ( pulverizacao == 2){
custo = area *100 }
else if (pulverizacao == 3) {
    custo = area*150
}
else if (pulverizacao == 4) {
    custo= area *250
}
else {
    alert ('Opção invalida')
}
if ( area >1000){
    desconto = custo *0.95
}
else  {
    desconto = custo
}
if (desconto > 750) {
    desconto = 750  * 0.9
}
alert ('Total: R$ ' + desconto)
