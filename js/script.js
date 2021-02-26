
// 1. Inserimento Chilometri viaggio
var chilometri = prompt("Inserisci il numero di chilometri che vuoi percorrere");

var prezzo = chilometri * 0.21;
console.log(prezzo);

// 2. Inserimento età utente
var eta = prompt("Inserisci la tua età");

// 3. Prezzo totale viaggio

if ( eta < 18 ) {
  var scontoMin = prezzo - ((prezzo * 20) / 100);
  console.log(scontoMin);
} else if ( eta >= 65 ) {
  var scontoOld = prezzo - ((prezzo * 40) / 100);
  console.log(scontoOld);
} else {
  console.log(prezzo);
}
