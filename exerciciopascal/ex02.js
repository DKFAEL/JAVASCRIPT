
var n =parseFloat(prompt('DIGITE UM NÚMERO:'))
var fatorial = n 

for(fato = 1; fato < n; fato++){
    fatorial=fatorial * (n-fato);
}

alert (`Seu fatorial e ${fatorial}`);