// PALINDROMO

/*

    Palindroma
    Chiedere all'utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma 

*/


const userWord = prompt('Inserisci una parola:');
console.log('userWord', userWord, typeof userWord);

isPalindrome(userWord);
isPalindrome('radar');
isPalindrome('ciccio');
isPalindrome('itopinonavevanonipoti');

/* 
    FUNZIONI
*/
function isPalindrome(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i]);

        reverseWord += word[i];
    }

    console.log('reverseWord', reverseWord, typeof reverseWord);

    if (word === reverseWord) {
        alert(word + 'è una parola palindroma');

    }
    else {
        alert(word + 'NON è una parola palindroma');
    }
}