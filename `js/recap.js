// RIASSUNTO DI IERI
// Strutture dati COMPLESSE in JS -> OGGETTI & ARRAY

// invece che creare tante variabili singole e individuali per memorizzare caratteristiche appartenenti
// ad una stessa entità, ha più senso memorizzare in una variabile l'entità come STRUTTURA COMPLESSA.
//

// un oggetto è una struttura dati che memorizza informazioni sotto forma di COPPIE chiave:valore

const house = {
  wallsColor: 'yellow', // proprietà
  floors: 2, // proprietà
  hasElevator: false, // proprietà
  'is-old': true,
  windows: {
    // proprietà
    material: 'PVC', // proprietà
    qty: 4, // proprietà
  },
}

// per esplorare/accedere/recuperare informazioni utilizzeremo la CHIAVE di ogni proprietà
// utilizzando due metodologie:
// a) "DOT NOTATION" -> predefinito e assolutamente più comune!
const n1 = house.floors // 2
const n2 = house.windows.qty // 4
// b) "SQUARE BRACKETS NOTATION" -> di scorta, serve in situazioni particolari
const s1 = house['wallsColor'] // 'yellow'

// casi particolari: il nome della chiave ha un - dentro
const s2 = house['is-old'] // FUNZIONA
// const s3 = house.is-old // NON FUNZIONA

const m = house['windows']['material'] // es. per recuperare un valore annidato

// MODIFICARE / CREARE PROPRIETÀ NUOVE
house.floors = 3
house.bonus110 = false

delete house.bonus110 // RIMUOVE UNA PROPRIETÀ

// ALTRA STRUTTURA DATI: ARRAY
// un array è una struttura dati che memorizza informazioni sotto forma di COLLEZIONE ORDINATA DI VALORI
// separati da virgola

const numbers = [3, 4, 5, 60]
const mobili = ['tavolo', 'sedia', 'armadio']
const people = [
  {
    name: 'Stefano',
    skills: 'FE',
  },
  {
    name: 'Giorgio',
    skills: 'CSS',
  },
  {
    name: 'Antonino', // se lo volessi modificare -> people[2].name = 'Camilla'
    skills: 'BE',
  },
]

// accesso agli elementi
// l'unico fattore discriminante tra gli elementi di un qualsiasi array è la loro POSIZIONE nell'array
// ogni array ha un primo elemento, un ultimo elemento e n elementi intermedi
// quindi è proprio con la POSIZIONE che noi ACCEDIAMO agli elementi di un qualsiasi array!
// tramite la notazione -> nomeArray[posizioneElemento]
// ricordandosi SEMPRE che le POSIZIONI (INDICI) partono da ZERO -> 0
mobili[0] // primo elemento, 'tavolo'
mobili[1] // secondo elemento, 'sedia'
mobili[2] // terzo elemento, 'armadio'
mobili[3] // quarto elemento, NON ESISTE -> undefined

// il primo elemento ha indice zero, l'ultimo elemento ha indice "lunghezza-1" dove lunghezza (length)
// è pari al numero degli elementi dell'array
// ogni array ha quindi una proprietà "length" che restituisce un NUMERO (degli elementi)
mobili[1] = 'comodino' // cambio il valore ad un elemento
mobili.push('letto') // aggiunge in code
mobili.pop() // rimuove l'ultimo
mobili.unshift('tavolino') // aggiunge in cima
mobili.shift() // rimuove dalla cima
mobili.splice(2, 1, 'credenza') // tolgo l'armadio e lo sostituisco con 'credenza'
// SLICE SERVE A RITAGLIARE UNA NUOVA FETTA DI UN ARRAY
mobili.slice(0, 2) // parto da 0, arrivo a 2 senza includerlo -> ["tavolo", "sedia"]

// LOGICA CONDIZIONALE
// È normalissimo che i nostri ragionamenti tradotti in codice NON sempre procedano in linea retta;
// alle volte è necessario che il codice prenda una decisione a partire da determinate condizioni.
// es. se hai preso almeno 18 all'esame, l'hai superato
const myVoto = 17

// SE hai preso almeno 18, stampa il primo console.log()
// ALTRIMENTI stampa il secondo
if (myVoto >= 18) {
  console.log('Congratulazioni per il tuo esame')
} else {
  console.log('Peccato, riprova al prossimo appello')
}

// è possibile anche avere PIÙ condizioni da verificare
const myName = 'Stefano'

if (myName === 'Stefano') {
  console.log('Benvenuto, Stefano!')
} else if (myName === 'Alessandro') {
  console.log('Che piacere vederti, Alessandro!')
} else if (myName === 'Roberto') {
  console.log('Quanto tempo, Roberto!')
} else {
  console.log('Benvenuto, sconosciuto')
}

const nomeApprovato = myName === 'Stefano' // nomeApprovato vale true

if (nomeApprovato) {
  // perchè nomeApprovato è già true
  console.log('Nome approvato!')
}

const anotherName = 'Davide'

if (anotherName) {
  // questo messaggio viene stampato!
  console.log('Ciao!')
}

// il messaggio viene stampato con if('Davide') perchè in JS tutti i possibili valore, alla fine della fiera,
// possono venire "castati" in un tipo booleano
// questo è il significato delle parole "TRUTHY" e "FALSY" in JS.
// in JS TUTTI i valori sono TRUTHY (tendono a true), a parte questi:
// - ''
// - 0 e -0
// - false
// - null/undefined/NaN
