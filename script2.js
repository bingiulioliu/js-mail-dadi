/////////////////////////////////////////
// Gioco dei dadi ////////////
/////////////////////////////////////////

// Creo due numeri random da 1 a 6, il primo assegnato al player e il secondo al pc
// alert ('Gioco dei dadi! Clicca OK per giocare');
// let dadoPlayer = (Math.floor(Math.random() * 6 + 1));
// let dadoPc = (Math.floor(Math.random() * 6 + 1));

// if  (dadoPlayer > dadoPc) {
//     alert('Player tira: ' + dadoPlayer + ' PC tira: ' + dadoPc + ' Vince Player!');
// }
//     else if (dadoPlayer < dadoPc) {
//         alert('Player tira: ' + dadoPlayer + ' C tira: ' + dadoPc + ' Vince PC!');
// }   
//     else {
//         alert('Player tira: ' + dadoPlayer + ' PC tira: ' + dadoPc + ' Pareggio!');
//     }

// Gioco dei dadi con array
const dSei = [1, 2, 3, 4, 5, 6];
const dadoPlayer = (Math.floor(Math.random() * 6 + 1));
const dadoPc = (Math.floor(Math.random() * 6 + 1));

alert ('Gioco dei dadi! Clicca OK per giocare');

if  (dSei[dadoPlayer] > dSei[dadoPc]) {
    alert('Player tira: ' + dadoPlayer + ' PC tira: ' + dadoPc + ' Vince Player!');
}
    else if (dSei[dadoPlayer] < dSei[dadoPc]) {
        alert('Player tira: ' + dadoPlayer + ' C tira: ' + dadoPc + ' Vince PC!');
}   
    else {
        alert('Player tira: ' + dadoPlayer + ' PC tira: ' + dadoPc + ' Pareggio!');
    }