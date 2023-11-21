// Inizializzazione variabili
let km = prompt("Quanti km devi effettuare?");
let age = prompt("Quanti anni hai?");
let price = km * 0.21;
let discount = 0;

// Controllo età ed assegno corrispettivo sconto
if (age < 18) {
  discount = (price * 20) / 100;
} else if (age >= 65) {
  discount = (price * 40) / 100;
}

let discounted_price = price - discount;

// Mostro il risultato a video
document.getElementById("prezzo").innerHTML = `Il costo del biglietto è ${discounted_price.toFixed(2)}`