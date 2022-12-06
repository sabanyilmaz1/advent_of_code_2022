const { readFileSync } = require("fs");

const sample = readFileSync("day04.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n")
  .map((line) => line.split(",").map((range) => range.split("-").map(Number)));

// const sampleInput = `
// 2-4,6-8
// 2-3,4-5
// 5-7,7-9
// 2-8,3-7
// 6-6,4-6
// 2-6,4-8
// `;

// const sample = sampleInput
//   .replace(/\r/g, "")
//   .trim()
//   .split("\n")
//   .map((line) => line.split(",").map((range) => range.split("-").map(Number)));

const part1 = () => {
  let count = 0;
  for (let line in sample) {
    const lineSample = sample[line];
    const firstPart = lineSample[0];
    const secondPart = lineSample[1];
    if (
      (firstPart[0] <= secondPart[0] && firstPart[1] >= secondPart[1]) ||
      (secondPart[0] <= firstPart[0] && secondPart[1] >= firstPart[1])
    ) {
      console.log("c'est bon");
      count++;
    }

    console.log(count);
  }
};

const part2 = () => {
  let count = 0;
  for (let line in sample) {
    const lineSample = sample[line];
    const firstPart = lineSample[0];
    const secondPart = lineSample[1];
    if (
      (secondPart[0] <= firstPart[0] && firstPart[0] <= secondPart[1]) ||
      (secondPart[0] <= firstPart[1] && firstPart[0] <= secondPart[1]) ||
      (firstPart[0] <= secondPart[0] && secondPart[0] <= firstPart[1]) ||
      (firstPart[0] <= secondPart[1] && secondPart[1] <= firstPart[1])
    ) {
      console.log(firstPart, secondPart);
      console.log("c'est bon");
      count++;
    } else {
      console.log("c'est faux");
      console.log(firstPart, secondPart);
    }

    console.log(count);
  }
};

part2();
