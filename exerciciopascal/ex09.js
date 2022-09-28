/**Leia a velocidade máxima permitida em uma avenida e a velocidade com que o motorista
estava dirigindo nela e calcule a multa que uma pessoa vai receber, sabendo que são
pagos: 
    a) 50 reais se o motorista estiver ultrapassar em até 10km/h a velocidade permitida (ex.: velocidade máxima: 50km/h; motorista a 60km/h ou a 56km/h); 
    b) 100 reais, se o motorista ultrapassar de 11 a 30 km/h a velocidade permitida. c) 200 reais, se estiver
    acima de 31km/h da velocidade permitida. */


    const permitida = parseFloat(prompt('Digite a velocidade  permitida em Km/h'))
    const veiculo = parseFloat(prompt('Digite a velocidade do veiculo em Km/h'))

    if (veiculo > permitida & veiculo <= (permitida +10)){
    alert ('  ate 10km acima do permitido Multa de 50R$')  } 
    
    else if (veiculo > (permitida +11) & veiculo <= (permitida +30)  ) {
        alert ('Acima de 11Km ate 31km do permitido Multa de 100 R$')
    }
    else if ( veiculo > (permitida +31)) {
        alert ('Acima de 30Km permitido Multa de 200 Reais')
    }
