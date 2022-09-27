/** escaleno, quando todos os lados possuem medidas diferentes;  isósceles, quando existem dois lados que possuem mesma medida; ou equilátero, quando todos os lados são congruentes. */

let A = parseInt (prompt('informe o 1º valor do triangulo'))
let B = parseInt (prompt('informe o 2º valor do triangulo'))
let C = parseInt (prompt('informe o 3º valor do triangulo'))

if ( A  == B == C  || B==C==A||C==A==B) {
   alert (`equilátero`)
}
else if ( A == B != C || C == B != A || C == A != B ){
    alert ( `isósceles`)
}
else {
  alert ( `escaleno`)
}