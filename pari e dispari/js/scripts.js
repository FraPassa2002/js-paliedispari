//PARI E DISPARI


/*

    Pari e Dispari
    L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre sa 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.

*/

const userChoice = prompt('Scegli P o D:');
console.log('userChoice', userChoice, typeof userChoice);

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5:'));
console.log('userNumber', userNumber, typeof userNumber);

const pcNumber = generateRandomNumber(1, 5);
console.log('pcNumber', pcNumber, typeof pcNumber);

const sum = userNumber + pcNumber;
console.log('sum', sum, typeof sum);

const even = isEven(sum);
console.log('even', even, typeof even)

if (even && userChoice == 'P') {
    alert('Hai vintoS')
}
else if (!even && userChoice == 'D'){
    alert ('Hai Vinto')
}
else {
    alert ('Hai perso')
}

/*
    FUNCTION
*/
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}