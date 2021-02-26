
// 1. Inserimento Chilometri viaggio

alert ("Benvenuto su Raileean, per calcolare il prezzo del biglietto del treno abbiamo bisogno di un paio di informazioni. Sei pronto?")

var chilometri = prompt("Inserisci il numero di chilometri che vuoi percorrere");

chilometri = parseInt(chilometri);

console.log(isNaN(chilometri));

if (isNaN(chilometri)) {
  alert ("Inserisci il numero dei chilometri, non scriverlo a lettere! Refresha la pagina e riprova!");
}

// 2. Calcolo del prezzo per chilometro
var prezzo = chilometri * 0.21;
console.log("Prezzo del biglietto al netto degli sconti: " + prezzo + " €");

// 3. Inserimento età utente
var eta = prompt("Inserisci la tua età");

console.log(isNaN(eta));

if (isNaN(eta)) {
  alert ("Inserisci il numero dei chilometri, non scriverlo a lettere! Refresha la pagina e riprova!");
}

// 4. Prezzo totale viaggio
if ( eta < 18 ) {
  prezzo = prezzo - ((prezzo * 20) / 100);
}
if ( eta >= 65 ) {
  prezzo = prezzo - ((prezzo * 40) / 100);
}

document.getElementById("prezzofinale").innerHTML = prezzo + " €";
