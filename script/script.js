"use strict";

/* 
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e 
per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

// dichiarazione variabili
const bound = 100;
// ciclo for per stampare output
for (let i = 1; i <= bound; i++) {
    // se i è multiplo di 3
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            // se i oltre ad essere multiplo di 3, lo è anche di 5
            console.log("FizzBuzz");
        }
        else {
            // se i è SOLO multiplo di 3
            console.log("Fizz");
        }
    }
    // se i è SOLO multiplo di 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // se i non è multiplo di 3 o 5
    else {
        console.log(i);
    }
}