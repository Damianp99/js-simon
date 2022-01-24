/*Descrizione:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

1-Crea una funzione per la creazione randomica di numeri
2-Creare un 'setTimeout / setInterval' 
    3-Inserire prompt per far scrivere all'utente i numeri precendemente visti nell'alert
    4-Confronto fra le due liste di numeri per controllare i numeri generati e quelli inseriti dall'utente
    5-Verificare quanti numeri coincidono
*/


// Funzione randomica per i numeri
const getRandomNum = (num) => {
    for (let i = 0; i < 5; i++) {
        randomNum = Math.floor(Math.random() * 100 + 1)
        num.push(randomNum)
        // console.log(randomNum);
    }
    return randomNum
}

const listNumbers = [];
getRandomNum(listNumbers)
// console.log((listNumbers));

alert('Questi sono i numeri vincenti : ' + listNumbers)

const userNumbers = [];

const timer = setTimeout(() => {

    for (let i = 0; userNumbers.length < 5; i++) {
        const winnerNumbers = parseInt(prompt('Inserisci i numeri che ricordi'));
        // validazione per i numeri inseriti dall'utente
        if (isNaN(winnerNumbers) || winnerNumbers > 100 || winnerNumbers <= 0) {
            alert('Inserisci un numero che sia tra 1 e 100')
        } else {
            userNumbers.push(winnerNumbers)
        }
    }
    console.log(userNumbers)
    const checkNumbers = userNumbers.filter(number => listNumbers.includes(number));
    // console.log(guessedNumbers);
    if (checkNumbers.length < 1) {
        alert('Non hai indovinato neanche un numero RIPROVA!')

    } else alert(`Hai indovinato ${checkNumbers} BRAVO!`)

}, 1000);
// da cambiare poi in 30000

// 






