const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/

console.log("ESERCIZIO 1");

const charactersNames = [];
console.log("Ecco l'array vuoto:", charactersNames);

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

console.log("ESERCIZIO 2");

for (let i = 0; i < starWarsCharacters.length; i++) {
  const names = starWarsCharacters[i].name;
  charactersNames.push(names);
}

console.log("Ecco i nomi dei personaggi:", charactersNames);

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

console.log("ESERCIZIO 3");

const femaleCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  const gender = starWarsCharacters[i].gender;
  const names = starWarsCharacters[i].name;
  if (gender === "female") {
    femaleCharacters.push(names);
  }
}

console.log("Ecco i nomi dei personaggi femminili:", femaleCharacters);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

console.log("ESERCIZIO 4");

const eyeColor = {
  blue: [],
  brown: [],
  red: [],
  "blue-gray": [],
};

console.log("Ecco l'oggetto 'eyeColor':", eyeColor);

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/

console.log("ESERCIZIO 5");

for (let i = 0; i < starWarsCharacters.length; i++) {
  switch (starWarsCharacters[i].eye_color) {
    case "blue":
      const blueEyeCharacter = starWarsCharacters[i];
      eyeColor.blue.push(blueEyeCharacter);
      break;
    case "brown":
      const brownEyeCharacter = starWarsCharacters[i];
      eyeColor.brown.push(brownEyeCharacter);
      break;
    case "red":
      const redEyeCharacter = starWarsCharacters[i];
      eyeColor.red.push(redEyeCharacter);
    case "blue-gray":
      const blueGrayCharacter = starWarsCharacters[i];
      eyeColor["blue-gray"].push(blueGrayCharacter);
      break;
    default:
      break;
  }
}

console.log("Ecco i personaggi divisi per colore degli occhi:", eyeColor);

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

console.log("ESERCIZIO 6");

let counter = 0;
let crewMass = 0;

while (counter < starWarsCharacters.length) {
  const mass = starWarsCharacters[counter].mass;
  crewMass += mass;
  counter++;
}

console.log("La massa totale dell'equipaggio è:", crewMass);

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

console.log("ESERCIZIO 7");

crewMass = 3000;

if (crewMass < 500) {
  console.log("Ship is under loaded");
} else if (crewMass >= 500 && crewMass <= 700) {
  console.log("Ship is half loaded");
} else if (crewMass > 700 && crewMass <= 900) {
  console.log("Warning: Load is over 700");
} else if (crewMass > 900 && crewMass < 1000) {
  console.log("Critical Load: over 900");
} else if (crewMass >= 1000) {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

console.log("ESERCIZIO 8");

const robotCharacters = [];

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
    const robot = starWarsCharacters[i];
    robotCharacters.push(robot);
  }
}

console.log("I personaggi droidi sono:", robotCharacters);

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

console.log("ESERCIZIO 9");

console.log(charactersNames);
console.log(femaleCharacters);

for (let i = 0; i < femaleCharacters.length; i++) {
  const femaleName = femaleCharacters[i];
  let count = 0;
  while (count < charactersNames.length) {
    const name = charactersNames[count];
    count++;
    if (femaleName === name) {
      const removeName = charactersNames[count];
      charactersNames.splice(1, 1);
    } else {
      console.log(femaleName);
    }
  }
}

console.log(charactersNames);

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/

console.log("ESERCIZIO 10");

const characterLenght = starWarsCharacters.length - 1;
const randomCharacter =
  starWarsCharacters[Math.floor(Math.random() * (0, characterLenght))];

console.log(
  "Lui è",
  randomCharacter.name,
  "è alto",
  randomCharacter.height,
  "la sua massa è",
  randomCharacter.mass,
  "il colore dei suoi capelli è",
  randomCharacter.hair_color,
  "il colore della sua pelle è",
  randomCharacter.skin_color,
  "ma non lo giudichiamo per questo, il colore dei suoi occhi è",
  randomCharacter.eye_color,
  "è nato",
  randomCharacter.birth_year,
  "il suo genere è",
  randomCharacter.gender
);
