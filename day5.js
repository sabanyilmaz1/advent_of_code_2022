const { readFileSync } = require("fs");

const sample = readFileSync("day05.txt", { encoding: "utf-8" }) // read day??.txt content
  // Remove starting/ending whitespace
  .split("\n");

const part1 = () => {
  const piles = [[], [], [], [], [], [], [], [], []];

  sample
    .slice(0, 8) // take only the first 10 lines
    .forEach((line) => {
      piles[0].push(line[1]);
      piles[1].push(line[5]);
      piles[2].push(line[9]);
      piles[3].push(line[13]);
      piles[4].push(line[17]);
      piles[5].push(line[21]);
      piles[6].push(line[25]);
      piles[7].push(line[29]);
      piles[8].push(line[33]);
    });

  // Supprime pour chaque sous tableau les elements vide ' ' et renvoie le tableau
  const removeEmpty = (piles) =>
    piles.map((pile) => pile.filter((el) => el !== " "));
  const pilesInFormat = removeEmpty(piles);

  const indications = sample.slice(10, sample.length - 1);
  // garder que les chiffres dans indications
  for (let el in indications) {
    indications[el] = indications[el].match(/\d+/g);
  }

  for (let i = 0; i < indications.length; i++) {
    const nbElement = indications[i][0];
    const moveFrom = indications[i][1];
    const moveTo = indications[i][2];
    //console.log("moveFrom :", moveFrom);
    const eltToMove = pilesInFormat[moveFrom - 1].slice(0, nbElement).reverse();
    // rajouter les elements eltToMove dans pilesInFormat[moveTo - 1] en mode pile
    pilesInFormat[moveTo - 1].unshift(...eltToMove);
    // supprimer les elements de pilesInFormat[moveFrom - 1] en mode pile
    pilesInFormat[moveFrom - 1].splice(0, nbElement);
  }

  //afficher le premier element de chaque sous tableau
  for (let i = 0; i < pilesInFormat.length; i++) {
    console.log(pilesInFormat[i][0]);
  }
};

const part2 = () => {
  const piles = [[], [], [], [], [], [], [], [], []];

  sample
    .slice(0, 8) // take only the first 10 lines
    .forEach((line) => {
      piles[0].push(line[1]);
      piles[1].push(line[5]);
      piles[2].push(line[9]);
      piles[3].push(line[13]);
      piles[4].push(line[17]);
      piles[5].push(line[21]);
      piles[6].push(line[25]);
      piles[7].push(line[29]);
      piles[8].push(line[33]);
    });

  // Supprime pour chaque sous tableau les elements vide ' ' et renvoie le tableau
  const removeEmpty = (piles) =>
    piles.map((pile) => pile.filter((el) => el !== " "));
  const pilesInFormat = removeEmpty(piles);

  const indications = sample.slice(10, sample.length - 1);
  // garder que les chiffres dans indications
  for (let el in indications) {
    indications[el] = indications[el].match(/\d+/g);
  }

  for (let i = 0; i < indications.length; i++) {
    const nbElement = indications[i][0];
    const moveFrom = indications[i][1];
    const moveTo = indications[i][2];
    //console.log("moveFrom :", moveFrom);
    const eltToMove = pilesInFormat[moveFrom - 1].slice(0, nbElement);
    // rajouter les elements eltToMove dans pilesInFormat[moveTo - 1] en mode pile
    pilesInFormat[moveTo - 1].unshift(...eltToMove);
    // supprimer les elements de pilesInFormat[moveFrom - 1] en mode pile
    pilesInFormat[moveFrom - 1].splice(0, nbElement);
  }

  //afficher le premier element de chaque sous tableau
  for (let i = 0; i < pilesInFormat.length; i++) {
    console.log(pilesInFormat[i][0]);
  }
};

part2();
