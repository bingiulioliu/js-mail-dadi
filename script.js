// Creare una lista mail di invitati
const listaInvitati = ['a@a.com', 'b@a.com', 'c@a.com', 'd@a.com', 'e@a.com'];

// Chiedo la mail all'utente (prompt), se contenuto nell'array vado avanti, altrimenti reinserisci

let accessoPermesso = false;
let mailInserita;

do {
    mailInserita = prompt('Inserisci la tua mail');

    for (let a = 0; a < listaInvitati.length; a++){
        if (mailInserita === listaInvitati[a]) {
            accessoPermesso = true;
            console.log('Benvenuto!');
            break;
        }
    }

    if (accessoPermesso === false) {
        console.log('Ritenta!'); 
    }

} while (accessoPermesso === false);

alert ('Benvenuto!')


