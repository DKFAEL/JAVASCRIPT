/**
 * 1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
mostrar :
    a. A menor altura do grupo;
    b. A maior altura do grupo;
 */


    const altura = []
   
    // Criar um loop que execute 6 vezes   
    for( let i = 1; i <= 15; i++) {
        const a =parseFloat(prompt(`Digite ${i}º Altura `))
        altura.push(a)

    }

    let maior = 0
    let menor = 0
    for (let alt of altura) {
        if(alt > maior){
            maior = alt ;
      }
    else {
    menor = alt;

    }}

alert(`A Maior altura e ${maior} `)
alert(` E a menor altura e ${menor}`)