// COSTRUTTO SWITCH
// uno "switch" è un modo più ordinato per creare un if/else if/else if/else if/else etc.

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

// questa struttura condizionale, volendo, la potete riscrivere in maniera più ordinata con uno "switch"
// uno switch è uno "SUGAR COATING" sull'if/else

switch (myName) {
  case 'Stefano':
    console.log('Benvenuto, Stefano!')
    break // si esce dallo switch
  case 'Alessandro':
    console.log('Che piacere vederti, Alessandro!')
    break // si esce dallo switch
  case 'Roberto':
    console.log('Quanto tempo, Roberto!')
    break // si esce dallo switch
  default:
    console.log('Benvenuto, sconosciuto')
}

const myNumber = 5

switch (myNumber) {
  case 0:
    console.log('sbagliato')
    break
  case 1:
    console.log('sbagliato ancora')
    break
  case 5:
    console.log('giusto!')
    break
  default:
    console.log('proprio no!!')
}
