const { readFileSync } = require("fs");

const sampleInput = readFileSync("day06.txt", { encoding: "utf-8" })
  .trim()
  .split("");

const isUnique = (array) => {
  return new Set(array).size === array.length;
};

const part1 = () => {
  for (let i = 0; i < sampleInput.length - 3; i++) {
    const fourLetters = sampleInput.slice(i, i + 4);
    const isDifferent = isUnique(fourLetters);
    if (isDifferent) {
      return i + 3 + 1;
    }
  }
};

const part2 = () => {
  for (let i = 0; i < sampleInput.length - 13; i++) {
    const fourteenLetters = sampleInput.slice(i, i + 14);
    const isDifferent = isUnique(fourteenLetters);
    if (isDifferent) {
      return i + 13 + 1;
    }
  }
};

console.log("part1 :", part1());
console.log("part2 :", part2());
