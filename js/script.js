
// 1. Inserimento Chilometri viaggio

alert ("Benvenuto su Raileean, per calcolare il prezzo del biglietto del treno abbiamo bisogno di un paio di informazioni. Sei pronto?")

var chilometri = prompt("Inserisci il numero di chilometri che vuoi percorrere");

// 2. Calcolo del prezzo per chilometro
var prezzo = chilometri * 0.21;
console.log(prezzo);

// 3. Inserimento età utente
var eta = prompt("Inserisci la tua età");

// 4. Prezzo totale viaggio
if ( eta < 18 ) {
  var scontoMin = prezzo - ((prezzo * 20) / 100);
  document.getElementById("prezzofinale").innerHTML = scontoMin + "€";
} else if ( eta >= 65 ) {
  var scontoOld = prezzo - ((prezzo * 40) / 100);
  document.getElementById("prezzofinale").innerHTML = scontoOld + "€";
} else {
  document.getElementById("prezzofinale").innerHTML = prezzo + "€";
}
