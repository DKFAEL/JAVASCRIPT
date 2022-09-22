const peso = parseFloat (prompt('Qual seu peso?')) 
const altura = parseFloat (prompt('Qual sua altura?')) 






console.log(peso)
console.log( altura)


const imc = peso / (altura * 2 )

console.log(imc)


  if ( imc < 18.5 ) {
   
    alert (`IMC: ${imc} Abaixo de 18.5 está abaixo do peso`)
}
else if (imc >=18.5 && imc <=25 ) {
 
  alert (`IMC: ${imc} Entre 18.5  e 25 está peso normal`)
}

else if (imc > 25 &&  imc <=30) {
  
  alert (`IMC: ${imc} Entre 25  e 30 está acima dopeso `)
}

else {

  alert (`IMC: ${imc} acima de 30`)
}