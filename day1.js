const { readFileSync } = require("fs");

const elves = readFileSync("day01.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n") // Split on newline
  .map(Number);

const part1 = () => {
  const sampleGroup = elves;
  // Step 1: Separate into subarrays with 0 as the separator
  let sampleByGroup = [];
  for (let i = 0; i < sampleGroup.length; i++) {
    if (sampleGroup[i] === 0) {
      sampleByGroup.push([]);
    } else {
      // Get the last group and push the current value
      sampleByGroup[sampleByGroup.length - 1]?.push(sampleGroup[i]);
    }
  }
  // Step 2: Sum each subarray and find the max
  let sum = 0;
  let max = 0;
  for (let i = 0; i < sampleByGroup.length; i++) {
    sum = sampleByGroup[i].reduce((a, b) => a + b, 0);
    if (sum > max) {
      max = sum;
      groupNumber = i + 1;
    }
  }

  return max;
};

const part2 = () => {
  const sampleGroup = elves;
  // Step 1: Separate into subarrays with 0 as the separator
  let sampleByGroup = [];
  for (let i = 0; i < sampleGroup.length; i++) {
    if (sampleGroup[i] === 0) {
      sampleByGroup.push([]);
    } else {
      // Get the last group and push the current value
      sampleByGroup[sampleByGroup.length - 1]?.push(sampleGroup[i]);
    }
  }

  for (let i = 0; i < sampleByGroup.length; i++) {
    sum = sampleByGroup[i].reduce((a, b) => a + b, 0);
    sampleByGroup[i] = sum;
  }
  sampleByGroup.sort((a, b) => b - a);
  return sampleByGroup.slice(0, 3).reduce((a, b) => a + b, 0);
};
