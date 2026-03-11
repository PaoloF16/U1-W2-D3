// CICLI IN JS
// Un ciclo, nello sviluppo software, è una struttura che permette di RIPETERE l'esecuzione di un po'
// di righe di codice un numero determinato/indeterminato di volte.
// Si usano molto spesso e servono a rendere il codice più pulito ed essere sicuri di portare a completamento
// determinate tipologie di operazioni.

// Ci sono DUE famiglie di cicli nello sviluppo software:
// a) i cicli che NON conoscono a priori il numero di iterazioni necessarie per completare il task (es. while)
// b) i cicli che CONOSCONO a priori il numero di iterazioni necessarie per completare il task (es. for)

// CICLO FOR
// Un ciclo for è un blocco di codice che viene ri-eseguito un numero PRE-FISSATO di volte!
// Il numero di volte lo decidete voi e dipende dal numero di iterazioni desiderato.

// for(creazioneContatore; verificaContatore; incrementoContatore)
for (let i = 0; i < 10; i++) {
  // qui ci va il codice da ripetere
  console.log('SONO NEL CICLO FOR', i)
  // quando il codice del ciclo for termina, viene INCREMENTATA la i a seconda di cosa avete messo nella
  // terza parte del for -> i++ vuol dire che i si INCREMENTA di UNO
}

// 1) si crea il contatore i che solitamente parte da 0
// 2) il ciclo for verifica che i sia minore di es. 10, se questa comparazione torna TRUE si entra nel for
// 3) al raggiungimento della graffa finale, i viene incrementato di 1 ("i++")
// 4) viene riverificato se i è ancora più piccolo di 10, se torna TRUE si ri-esegue il for
// 5) ...
// 6) quando i era 4 e viene incrementata a 10, la condizione i < 10 tornerà FALSE -> il ciclo si ferma

// ...come mai il ciclo FOR è quello che utilizzeremo più spesso? perchè viene MOLTO COMODO
// per l'esplorazione e la manipolazione degli ARRAYs

const arrayDiNomi = [
  'Hina', // 0
  'Daniele', // 1
  'Cristina', // 2
  'Antonii', // 3
  'Franko', // 4
  'Mohamed', // 5
  'Michelangelo', // 6
]

// un array di 7 stringhe. Utilizziamo un ciclo FOR per stampare in console TUTTI i nomi, uno dopo l'altro.
// console.log(arrayDiNomi[0]) // 'Hina'
// console.log(arrayDiNomi[1]) // 'Daniele'
// console.log(arrayDiNomi[2]) // 'Cristina'
// console.log(arrayDiNomi[3]) // 'Antonii'
// console.log(arrayDiNomi[4]) // 'Franko'
// console.log(arrayDiNomi[5]) // 'Mohamed'
// console.log(arrayDiNomi[6]) // 'Michelangelo'

// invece che fare un console.log() per ciascuno, utilizziamo un CICLO FOR!

for (let i = 0; i < arrayDiNomi.length; i++) {
  // all'inizio, la i vale 0, poi 1, 2, 3, 4, 5, 6
  // la i diventerà sempre un INDICE VALIDO per esplorare l'array
  console.log(arrayDiNomi[i])
  // la i vale 0 alla prima iterazione del for
  // la i vale 1 alla seconda iterazione del for
  // la i vale 2 alla terza iterazione del for
  // la i vale 3 alla quarta iterazione del for
  // la i vale 4 alla quinta iterazione del for
  // la i vale 5 alla sesta iterazione del for
  // la i vale 6 alla settima iterazione del for
}

const dogs = [
  {
    name: 'Fufi',
    age: 2,
  },
  {
    name: 'Pluto',
    age: 4,
  },
  {
    name: 'Gigione',
    age: 7,
  },
]

let totalAges = 0

for (let i = 0; i < dogs.length; i++) {
  console.log(i) // numero
  console.log(dogs[i]) // oggetto
  // qui dentro entrerò 3 volte
  // la prima volta i vale 0
  // la seconda volta i vale 1
  // la terza volta i vale 2
  totalAges = totalAges + dogs[i].age
}

console.log('ETA ACCUMULATE', totalAges) // 13
