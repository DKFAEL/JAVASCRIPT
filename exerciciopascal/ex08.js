/**Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de
cada um desses componentes para se obter uma certa quantidade de latão (requerida pelo
usuário). */

const ltao = parseInt(prompt('Digite a quantidade de latão'))

const c = ltao *0.7 
const z = ltao* 0.3

alert(`Será necessário ${c} de cobre e ${z} de zinco`);