/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km) 
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

/* 
RACCOLTA DATI
    preparare le variabili (prezzoKm, scontoMinorenni, scontoOver65)
    chiedere il numero di km
    chiedere l'età

ESECUZIONE LOGICA
    calcolare il prezzo base del biglietto

    SE (età > 65)
        prezzoFinale = prezzoBase - prezzoBase*scontoOver65
    ALTRIMENTI SE (età <= 18)
        prezzoFinale = prezzoBase - prezzoBase*scontoMinorenni
    ALTRIMENTI
        prezzoFinale = prezzo Base
    
    messaggio = Il prezzo del biglietto è prezzoFinale €
    OUTPUT
        stampo il messaggio
*/

const prezzoKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver65 = 0.4;

const kmPercorsiStr = prompt("Quanti chilometri vuole percorrere?")
const etaStr = prompt("Quanti anni ha?")

const kmPercorsi = parseInt(kmPercorsiStr);
const eta = parseInt(etaStr);

const prezzoBase = prezzoKm * kmPercorsi;
let prezzoFinale = prezzoBase;

if (eta > 65) {
    prezzoFinale = prezzoBase - prezzoBase * scontoOver65;
} else if (eta < 18) {
    prezzoFinale = prezzoBase - prezzoBase * scontoMinorenni;
}

let messaggio = `Il prezzo finale del biglietto è ${prezzoFinale.toFixed(2)}`
console.log(messaggio);