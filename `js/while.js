// CICLI IN JS
// Un ciclo, nello sviluppo software, è una struttura che permette di RIPETERE l'esecuzione di un po'
// di righe di codice un numero determinato/indeterminato di volte.
// Si usano molto spesso e servono a rendere il codice più pulito ed essere sicuri di portare a completamento
// determinate tipologie di operazioni.

// Ci sono DUE famiglie di cicli nello sviluppo software:
// a) i cicli che NON conoscono a priori il numero di iterazioni necessarie per completare il task (es. while)
// b) i cicli che CONOSCONO a priori il numero di iterazioni necessarie per completare il task (es. for)

// CICLO WHILE
// while significa "finchè", "mentre", "durante"
// while è il più famoso esponente della famiglia a) dei cicli elencati sopra

// ESEMPIO: lancio un dado finchè non esce 6!

// problema di fondo: come faccio in JS a simulare un lancio di un dado? dobbiamo estrarre un numero da 1-6

const random = Math.random() // restituisce un numero casuale DECIMALE tra 0 e 1
console.log('NUMERO CASUALE TRA 0 e 1', random)

// figo! ma come ottengo un numero tra 1 e 6, visto che devo simulare il lancio di un dado
const da1a6decimali = Math.random() * 6 // 0.0000001 * 6 -> 0.0000006 | 0.9999999 * 6 = 5.999994

// Math.ceil() arrotonda per ECCESSO, Math.floor() arrotonda per DIFETTO, Math.round() arrotonda al più vicino
const da1a6 = Math.ceil(Math.random() * 6) // 1 - 6
console.log('NUMERO CASUALE TRA 1 e 6', da1a6)

// ora vogliamo provare a contare i lanci necessari per ottenere il 6
// dovremo lanciare il dado finchè non esce 6

let risultatoDelLancio = 0
let tentativi = 0

while (
  // in questa condizioni dovrei trovare il modo di capire se in un lancio precedente ho già fatto 6
  risultatoDelLancio !== 6
) {
  const lancio = Math.ceil(Math.random() * 6) // 1 - 6
  // è solo qui che posso sapere se ho fatto 6!
  // memorizzare il risultato del lancio nella variabile "risultato"
  risultatoDelLancio = lancio // diventa il valore che ho appena estratto
  // aumento di 1 i tentativi che sono stati necessari
  tentativi = tentativi + 1
}
console.log(
  'ciao! ho finito, è uscito 6. Ci ho messo ' + tentativi + ' tentativi',
)
// "scope" (visibilità) delle variabili: da FUORI il while io non vedo la variabile "test"
// console.log(test)

// FUNZIONAMENTO DI QUESTO CICLO WHILE
// 1) la variabile "risultatoDelLancio" viene creata con una let e le viene assegnato il valore di 0
// 2) arrivo al ciclo while: il ciclo while valuta la sua condizione: risultatoDelLancio è 0, quindi
// risultatoDelLancio !== 6 fa TRUE -> ENTRO NEL CICLO WHILE
// 3) lancio il dado, mettiamo che esca 3
// 4) questo 3 diventa il nuovo valore di risultatoDelLancio
// 5) stampo il console.log()
// 6) l'iterazione del while è finita: ora lui ricontrolla la sua condizione, vede che 3 non è 6, quindi
// la sua condizione ancora una volta torna TRUE -> ripete il blocco {  }
// 7) viene estratto 6, viene assegnato il 6 a risultatoDelLancio, il ciclo while prova a ripartire ma
// questa volta la condizione 6 !== 6 torna FALSE --> IL CICLO WHILE FINISCE
