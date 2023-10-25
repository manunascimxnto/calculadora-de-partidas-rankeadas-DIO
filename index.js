// Calculadora de Partidas Rankeadas pro Projeto da DIO <3

function calcularSaldoRankeadas(vitorias, derrotas) {

if (saldoVitorias < 10) {
   return nivel = "Ferro";
} 

else if (saldoVitorias > 11 && saldoVitorias < 20) {
   return nivel = "Bronze";
} 

else if (saldoVitorias > 21 && saldoVitorias < 50) {
   return nivel = "Prata";
} 

else if (saldoVitorias > 51 && saldoVitorias < 80) {
   return nivel = "Ouro";
} 

else if (saldoVitorias > 81 && saldoVitorias < 90) {
   return nivel = "Diamante";
} 

else if (saldoVitorias > 91 && saldoVitorias < 100) {
   return nivel = "Lendário";
} 

else if (saldoVitorias >= 101) {
   return nivel = "Imortal";
}

console.log("O herói tem saldo de " + saldoVitorias + " e está no nível " + nivel);
}
