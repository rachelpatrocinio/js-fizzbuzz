console.log("JS-FIZZBUZZ");

// Dichiaro una variabile per poter estrapolare l'ul dal DOM
const listElement = document.querySelector('.list');

// Scrivi un programma che stampi in console i numeri da 1 a 100
const n = 100;
// Dichiarare una Variabile e Assegnamo un Valore iniziale
// Impostiamo una condizione
// Incrementiamo di 1
for(let i = 0; i < n; i++){
    let num = i + 1; // Incrementiamo num di 1.
    //console.log(num);

    // Dichiaro una variabile per i numeri multipli di 3.
    let numMult3 = num % 3;
    //console.log(numMult3);

    // Dichiaro una variabile per i numeri multipli di 5.
    let numMult5 = num % 5;
    //console.log(numMult5);

    // Dichiaro una variabile e creo un elemento object <li></li>
    const liElement = document.createElement('li');
    console.log(liElement);
    // Inserisco il contenuto del mio elemento object tramite .innerHTML
    liElement.innerHTML = num;

    // Appendo il mio elemento object al padre UL
    listElement.append(liElement);

    let element;

    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
    if(numMult3 === 0 && numMult5 === 0){ // multipli 15
        //console.log("FizzBuzz");
        element = liElement.innerHTML = "FizzBuzz";
    } else if(numMult3 === 0){ // multipli 3
        // per i multipli di 3 stampi “Buzz” al post del numero.
        //console.log("Fizz");
        liElement.innerHTML = "Fizz";
    } else if(numMult5 === 0){ // multipli di 5
        // per i multipli di 5 stampi “Buzz” al post del numero.
        //console.log("Buzz");
        element = liElement.innerHTML = "Buzz";
    } else { // 
        element = liElement.innerHTML = num;
    }

    console.log(element);

}
