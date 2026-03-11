const agg = [
  {
    personaggio: 'Pdor',
    attore: 'Giovanni',
    anno: 1997,
    comparsa: 'Tel chi el telùn',
    citazione: 'Io sono Pdor, figlio di Kmer, della tribù di Istar!',
    caratteristiche: ['epico', 'serio', 'grottesco', 'immaginario'],
  },
  {
    personaggio: 'Dottor Pivetta',
    attore: 'Giacomo',
    anno: 1999,
    comparsa: 'Così è la vita',
    citazione: 'Guanti? 10 professore.',
    caratteristiche: ['psichiatra', 'freddo', 'ironico', 'inquietante'],
  },
  {
    personaggio: 'Nico',
    attore: 'Giovanni',
    anno: 1997,
    comparsa: 'Mai dire gol',
    citazione: "Mi suono l'adagio di Albinoni!",
    caratteristiche: ['rustici', 'esagerati', 'aggressivi', 'stereotipati'],
  },
  {
    personaggio: 'I bulgari',
    attore: 'Aldo, Giovanni e Giacomo',
    anno: 1999,
    comparsa: 'Tel chi el telùn!',
    citazione: '',
    caratteristiche: ['slavi', 'esilaranti', 'atleti', 'macchiette'],
  },
  {
    personaggio: 'Johnny Glamour',
    attore: 'Giovanni',
    anno: 1996,
    comparsa: 'I corti',
    citazione: 'Fa fa fa fa fa, Johnny Glamour!',
    caratteristiche: ['vanitoso', 'stravagante', 'grottesco', 'dj'],
  },
  {
    personaggio: 'Flanagan',
    attore: 'Giacomo',
    anno: 1996,
    comparsa: 'Mai dire gol',
    citazione: 'The pen is on the table!',
    caratteristiche: ['professore', 'inglese', 'sarcastico', 'ironico'],
  },
  {
    personaggio: 'Rolando',
    attore: 'Aldo',
    anno: 1999,
    comparsa: 'Mai dire gol',
    citazione: 'Miiii, non ci posso credereeee!',
    caratteristiche: ['entusiasta', 'ingenuo', 'istrionico'],
  },
  {
    personaggio: 'I chirurghi',
    attore: 'Aldo, Giovanni e Giacomo',
    anno: 1997,
    comparsa: 'Tel chi el telùn',
    citazione: "Doctor, c'ho sotto un cannone!",
    caratteristiche: ['surreali', 'maldestri', 'comici', 'nonsense'],
  },
]

// LAVORIAMO CON QUESTO ARRAY DI OGGETTI
// creiamo un nuovo array con solamente i nomi dei personaggi

const personaggi = []

for (let i = 0; i < agg.length; i++) {
  personaggi.push(agg[i].personaggio)
}

console.log(personaggi)

const terzeCaratteristiche = []

for (let i = 0; i < agg.length; i++) {
  terzeCaratteristiche.push(agg[i].caratteristiche[2])
}

// facciamo un array di personaggi usciti SOLO nell'anno 1997
const just1997 = []

for (let i = 0; i < agg.length; i++) {
  if (agg[i].anno === 1997) {
    just1997.push(agg[i])
  }
}
