// PALINDROMO

/*

    Palindroma
    Chiedere all'utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma 

*/


/*

    anna -> a n n a -> anna
    radar -> r a d a r -> radar
    osso -> o s s o -> osso

    gatto -> g a t t o -> ottag

*/

const userWord = prompt('Inserisci una parola:');
console.log('userWord', userWord, typeof userWord);

isPalindrome(userWord);

/* 
FUNZIONI
*/
function isPalindrome(word) {
    let reverseWord = '';
    for (let i = userWord.length - 1; i >= 0; i--) {
        console.log(userWord[i]);

        reverseWord += userWord[i];
    }

    console.log('reverseWord', reverseWord, typeof reverseWord);

    if (userWord === reverseWord) {
        alert(userWord + 'è una parola palindroma');
    }
    else {
        alert(userWord + 'NON è una parola palindroma');
    }
}