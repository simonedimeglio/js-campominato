// Creo una funzione che mi permetta di generare numeri random
function randomGenerator(num) {
    var  random = Math.floor(Math.random() * num) +1;
    return random;
}

// Dichiaro un Array vuoto che mi andrà a contenere i numeri random generati
var randomList = [];

// Inizializzo la variabile per le difficoltà
var number = 0;

// Dichiaro un Array vuoto che conterrà i numeri del giocatore
var userList = [];

// Creo una funzione per il controllo del contenuto di un Array
function arrayCheck (arrayItem, arrayName) {
    for (x = 0; x < arrayName.length; x++) {
        if(arrayName.includes(arrayItem)) {
            return false;
        }
    }
    return true;
}

// Creo le variabili per le difficoltà
var level1 = 100;
var level2 = 80;
var level3 = 50;
var levelChoice = parseInt(prompt('Seleziona la difficoltà. Scrivi 1 se vuoi il livello più semplice, 2 se vuoi il livello intermedio o 3 se vuoi metterti veramente alla prova!'));

// Inserisco 16 numeri differenti e random nell'array "randomList"
while (randomList.length < 16) {

    if (levelChoice === 1) {
        number = randomGenerator(50);
        if (arrayCheck(number, randomList)) {
            randomList.push(number);
            } 
    } else if (levelChoice === 2) {
        number = randomGenerator(80);
        if (arrayCheck(number, randomList)) {
            randomList.push(number);
            } 
    } else if (levelChoice === 3) {
        number = randomGenerator(199);
        if (arrayCheck(number, randomList)) {
            randomList.push(number);
            } 
    } else {
        alert('ERRORE, devi scrivere un numero da 1 a 3 per la difficoltà. RICARICA la pagina per iniziare di nuovo');
        break;
    }
    
} 


// Chiedo all'utente i numeri da inserire
for (var i = 0; i < 84; i++) {
    var userNumber = parseInt(prompt('Inserisci un numero'));
    if (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
        alert('Errore: devi inserire un numero tra 1 e 100');
        i--;
    } else if (userList.includes(userNumber)) {
        alert('Errore: numero già inserito');
        i--;
    } else if (randomList.includes(userNumber)) {
        alert('BOOM, hai perso!');
        break;
    } else {
        userList.push(userNumber);
    }
}

// STAMPO IL RISULTATO FINALE
document.getElementById('score').innerHTML = userList.length + ' punti.' + '<br>Per giocare di nuovo ricarica la pagina.';



console.log(randomList);
console.log(userList);
console.log('Il punteggio è di ' + userList.length);