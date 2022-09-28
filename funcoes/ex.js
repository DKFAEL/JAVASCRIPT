function resultado (a, b, c) {  

    const delta = Math.pow (b,2) -4 * a * c
                        // MATH: É UM OBJETO QUE POSSUI MÉTODOS P/ FAZER CALCULOS MATEMÁTICOS COMPLEXO
    const raizDelta = Math.sqrt(delta)   // <- TIRA A RAIZ QUADRADA DE UM NÚMERO   
  // const raizDelta = delta ** 0.5     - OS DOIS MÉTODOS FUNCIONA! 
  const x1 = (-b + Math.sqrt(delta)) / (2*a)
  const x2 = (-b - Math.sqrt(delta)) / (2*a)
  return [ x1, x2]
} 
console.log(resultado(1, -1, -12))
