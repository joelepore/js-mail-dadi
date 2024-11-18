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
*/

emails = [
  'ciao@gmail.com',
  'prova@gmail.com',
  'giuseppe@gmail.com'
]
let isEmailPresent = false

while (!isEmailPresent) {
  email = prompt('Inserisci la tua email.');

  isEmailPresent = emails.includes(email);

  if (!isEmailPresent) {
    console.log('La mail che hai inserito non e\' registrata.');
  }
}

console.log('Login effettuato con successo.');