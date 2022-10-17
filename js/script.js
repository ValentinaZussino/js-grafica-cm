// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

/* <div class="container-grid">
                <div class="square">
                    <span>1</span>
                </div>
            </div> */


// prendo btn play
const btnPlay = document.getElementById('play');
// creo variabile per numero quadrati --> dipende dal livello selezionato quindi faccio subito
let numSquares;
const levelSelect = document.getElementById('level');
const level = levelSelect.value;
switch(level){
    case 'easy':
        default: numSquares = 100;
        break;
    case 'hard':
        default: numSquares = 81;
        break;
    case 'crazy': 
        default: numSquares = 49;
}
// on click
btnPlay.addEventListener('click', function(){
    //funzione per generare quadrato
    function createSquare(){
        
    }

    //funzione per generare griglia
    

    // chiamo funzione per generare griglia

})
