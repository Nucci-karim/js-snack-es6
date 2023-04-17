// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// numero random 
// Math.floor( Math.random() * 10 ) + 1 [numero da 1 a 10]

// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// l'array egnerato da parte vostra dovrà essere di ad esempio nomi o cose: ['alberto', 'michele','angelo','simone']
// se come numeri ad esemio ho 2 e 4 devo inserire in un array nuovo l'elemento in posizione 3
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
// ------------------------------- primo snak --------------------------------------- //
// oggetto di bici 
const bici = [
    {
        nome: 'ABT',
        peso: 15,
    },
    {
        nome: 'BTT',
        peso: 7,
    },
    {
        nome: 'MountainBike',
        peso: 10,
    },
    {
        nome: 'SkinnyBike',
        peso: 3,
    },
]

// richiamo variabili 
let lightestBike = bici[0];

// stampa
for (let i = 1; i < bici.length; i++) {
  const { peso } = bici[i];

  if (peso < lightestBike.peso) {
    lightestBike = bici[i];
    document.querySelector('#bici-migliore').innerHTML =
    `
    <div>
        La bici più leggera è la ${lightestBike.nome} con un peso di ${lightestBike.peso} kg.
    </div>
    `
  }
}

// ------------------------------- secondo snak --------------------------------------- //
const squadre = [
{ 
    nome: 'Juventus', 
    punti: 0, 
    falli: 0 
},
{ 
    nome: 'Lazio',
    punti: 0, 
    falli: 0 
},
{ 
    nome: 'Roma', 
    punti: 0, 
    falli: 0 
},
{ 
    nome: 'Milan',
    punti: 0, 
    falli: 0 
}
];

// Generare numeri casuali per i punti e i falli
squadre.forEach(squadra => {
  squadra.punti = Math.floor(Math.random() * 100);
  squadra.falli = Math.floor(Math.random() * 50);
});

// Creare un nuovo array utilizzando la destrutturazione che contiene solo nome e falli
const squadreFalli = squadre.map(({ nome, falli }) => ({ nome, falli }));

// Stampa entrambi gli array in console
console.log('Tutte le Squadre:', squadre);
console.log('Squadre con Falli:', squadreFalli);


// ------------------------------- Terzo snak --------------------------------------- //
const arratNomi = ['paolo', 'Franco', 'Sara', 'Marta', 'michele', 'luca', 'alessandro']

let min = parseInt(prompt(`inserisci un numero da 0 a ${arratNomi.length - 1}`))
let max = parseInt(prompt(`inserisci un numero da 0 a 6`))

let arrayFiltrato = arratNomi.filter((element, index) => {
    if(min < index && max > index){
        return element
    }
})

console.log(arrayFiltrato)