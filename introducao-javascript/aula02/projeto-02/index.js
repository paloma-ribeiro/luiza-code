/* Calcular o gasto de combustível no mês */
/* Em um mês de 30 dias, sabendo que gasto R$ 50,00 de combustível ao dia. 
Quanto estou gastando em 5 dias, 15 dias, e no mês inteiro? */

let valorDia = 50.00;
let gastoCincoDias = valorDia * 5;
let gastoQuinzeDias = valorDia * 15;
let gastoTrintaDias = valorDia * 30;

let mensagem = "Eu gasto R$ " + gastoCincoDias + " em cinco dias, R$ " + gastoQuinzeDias + " em 15 dias e R$ " + gastoTrintaDias + " em 30 dias";

alert(mensagem)