// ## Pari e Dispari

// 1. Creo Array delle opzioni valide

// 2. Richiedo all'utente di inserire un opzione valida.

// 3. Creo funzione per determinare se il numero è pari o dispari

// 4. Creo una funzione che generi un numero random per l'utente ed uno per il computer.

// 5. Sommo i due numeri.

// 6. Creo una funzione per verificare che la somma dei due numeri sia pari o dispari.

// 7. determino il vincitore. 

// 8. Stampo in pagina il risultato .

// 1.
const opzioniValide = ['pari', 'dispari']

// 2.
const scelta = prompt('Scrivi qui sotto la tua scelta: pari o dispari?')

while (!opzioniValide.includes(scelta)) {
  alert('Scelta non valida. Ricaricare la pagina.')
}

// 3.
function isPari(numero) {
  return numero % 2 === 0;
}

// 4.
function numeroRandom () {
  return Math.floor(Math.random() *5) +1;
}

const numeroUser = numeroRandom();
const numeroPc = numeroRandom();
console.log(numeroUser);
console.log(numeroPc);
let stampaNumeroUser = document.querySelector('.random-user');
stampaNumeroUser.innerHTML = 'il tuo numero è: ' + numeroUser
let stampaNumeroPc = document.querySelector('.random-pc');
stampaNumeroPc.innerHTML = 'il numero del computer è: ' + numeroPc

// 5.
const somma = numeroUser + numeroPc
console.log(somma);

// 6.
function verifica () {
  if (somma % 2 == 0) {
    messaggio = 'La somma dei due numeri è pari. '
  } else {
    messaggio = 'la somma dei due numeri è dispari. '
  }
  // 7.
  if((somma % 2 === 0 && scelta === "pari") || (somma % 2 !== 00 && scelta === "dispari")) {
  messaggio += "Hai vinto!";
  } else {
    messaggio += "Il computer ha vinto!"
  }
  // 8.
  let stampa = document.querySelector('.output')
  stampa.innerHTML = messaggio
}

verifica();
