
/*
let precoDoCompustivel = 5.50
let gastoPorKm = 10
let distaciaViageKm = 100

let valorTotal = distaciaViageKm / gastoPorKm * precoDoCompustivel
console.log("O valor total da viagem foi de " + valorTotal + " Reais " )
*/

const precoEtanol = 6.66
const precoGasolina = 10
const tipoCombustivelDoCarro = precoEtanol
const gastomedioCombustivelKm = 10
const distanciaViagemKm = 100

let calculoGastoEtanolKm = distanciaViagemKm / gastomedioCombustivelKm * precoEtanol
let calculoGastoGasolinaKm = distanciaViagemKm /  gastomedioCombustivelKm * precoGasolina

if (tipoCombustivelDoCarro  === precoEtanol) {
   console.log("O valor gasto do  combustivel Etanol será de " + calculoGastoEtanolKm + " Reais")
} else if (tipoCombustivelDoCarro  === precoGasolina) {
         console.log("O valor gasto do  combustivel gasolina será de " + calculoGastoGasolinaKm.t + " Reais")
} else {
  console.log("Valor inválido")
}