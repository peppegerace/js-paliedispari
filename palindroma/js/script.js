// ## Palindroma

// 1. Raccolgo il dato dall'utente.

// 2. Creo funzione per invertire la parola dell'utente.

// 3. Creo funzione per verificare che la parola inserita sia palindroma.

// 4. Creo le condizioni per stampare la risposta corretta 

// 1.
const parola = prompt('Inserisci una parola');

// 2.
function reverseString(stringa) {
  let stringaInvertita = '';
  for (let i = stringa.length - 1; i>= 0; i--) {
    stringaInvertita += stringa[i]
  }
  return stringaInvertita;
};

// 3.
function palindroma (parola) {
  
  parola = parola.toLowerCase();
  
  const parolaInvertita = reverseString(parola);
  
  return parola === parolaInvertita;
}

// 4.
const messaggio = document.querySelector('.output');
if (palindroma(parola)) {
  messaggio.innerHTML = (parola + " è una parola palindroma!");
} else {
  messaggio.innerHTML = (parola + " non è una parola palindroma.");
};

