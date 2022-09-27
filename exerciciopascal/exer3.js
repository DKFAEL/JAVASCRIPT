
var ano = parseInt(prompt('DIGITE UM ANO PRA SABER SE ELE E BISSEXTO!'))

if ((ano % 4 == 0 && ano % 100 !=0) || ano  % 400 == 0)  {
    alert (' SEU ANO E BISSEXTO')

}
else {
    alert( 'SEU ANO NÃO É BISSEXTO')
}