const { readFileSync } = require("fs");

const rucksacks = readFileSync("day03.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

//function to convert letter to number and for uppercase letters begin with 27
function letterToNumber(letter) {
  if (letter === letter.toUpperCase()) {
    return letter.charCodeAt(0) - 64 + 26;
  } else {
    return letter.charCodeAt(0) - 96;
  }
}

//const rucksacks = sampleInput.replace(/\r/g, "").trim().split("\n");

const part2 = () => {
  let sumOfPriorities = 0;
  for (let i = 0; i < rucksacks.length; i = i + 3) {
    //find the common character in three lines
    let commonCharacter = "";
    for (let j = 0; j < rucksacks[i].length; j++) {
      if (
        rucksacks[i + 1].includes(rucksacks[i][j]) &&
        rucksacks[i + 2].includes(rucksacks[i][j])
      ) {
        commonCharacter = rucksacks[i][j];
        sumOfPriorities = sumOfPriorities + letterToNumber(commonCharacter);
        break;
      }
    }
  }
  console.log("sumOfPriorities", sumOfPriorities);
};

const part1 = () => {
  let sumOfPriorities = 0;
  for (let line in rucksacks) {
    // separate in two parts with same length
    let firstPart = rucksacks[line].slice(0, rucksacks[line].length / 2);
    let secondPart = rucksacks[line].slice(rucksacks[line].length / 2);
    // find the character common to both parts
    let commonCharacter = "";
    for (let i = 0; i < firstPart.length; i++) {
      if (secondPart.includes(firstPart[i])) {
        commonCharacter = firstPart[i];
        break;
      }
    }
    sumOfPriorities = sumOfPriorities + letterToNumber(commonCharacter);
  }
};
