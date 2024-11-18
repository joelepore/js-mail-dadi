/* 
Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. Non è necessario provvedere alla validazione delle email

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

/*
  1. Dichiaro e inizializzo un array di email
  2. Chiedo in input un'email
  3. Verifico che l'email sia registrata
    - Se e' registrata, vado avanti
    - Altrimenti la richiedo
  4. Genero due numeri casuali da 1 a 6
  5. Stabilisco il vincitore in base alla generazione
*/

const emails = [
  'ciao@gmail.com',
  'prova@gmail.com',
  'giuseppe@gmail.com'
]
let isEmailPresent = false, isEmailValid = false;
let pcNum, playerNum;
let message;
let email;

// Espressione regolare per validare un'email (trovata su stack overflow)
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

while (!isEmailPresent || !isEmailValid) {
  email = prompt('Inserisci la tua email.');

  isEmailPresent = emails.includes(email);
  isEmailValid = email.toLowerCase().match(re);

  if (!isEmailValid) {
    console.log('La mail che hai inserito non e\' valida.')
  } else if (!isEmailPresent) {
    console.log('La mail che hai inserito non e\' registrata.');
  }
}

console.log('Login effettuato con successo.');
console.log('=================================')
console.log('Benvenuto nel gioco dei dadi.')

pcNum = Math.ceil(Math.random() * 6);
playerNum = Math.ceil(Math.random() * 6);

console.log(`Il computer ha giocato ${pcNum}`);
console.log(`Hai giocato ${playerNum}`);

if (pcNum > playerNum) {
  message = 'Hai perso!';
} else if (playerNum > pcNum) {
  message = 'Hai vinto!';
} else {
  message = 'Patta!';
}

console.log(message);