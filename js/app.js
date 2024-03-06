console.log("JS-FIZZBUZZ");

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

    // Per i numeri NON multipli di 3 E NON multipli di 5 stampiamo il numero.
    if(numMult3 !== 0 && numMult5 !== 0){
        console.log(num);
    }

    // Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
    if(numMult3 === 0 && numMult5 === 0){
        console.log("FizzBuzz");
    } else if(numMult3 === 0){
        // per i multipli di 3 stampi “Buzz” al post del numero.
        console.log("Fizz");
    }

    if(numMult5 === 0){
        // per i multipli di 5 stampi “Buzz” al post del numero.
        console.log("Buzz");
    }
}
