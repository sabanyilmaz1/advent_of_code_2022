const { readFileSync } = require("fs");

const sampleInput = readFileSync("day08.txt", { encoding: "utf-8" })
  .trim()
  .split("\n")
  .map((line) => line.split(""))
  .map((line) => line.map((char) => parseInt(char)));

function extractColumn(arr, column) {
  return arr.map((x) => x[column]);
}

function calculScenicScore(arr, el) {
  let score = 0;
  let i = 0;
  while (el > arr[i]) {
    score++;
    i++;
  }
  if (i === arr.length) {
    return score;
  } else {
    return score + 1;
  }
}

const part1 = () => {
  let visibleThree = sampleInput.length * 4 - 4;
  for (let i = 1; i < sampleInput.length - 1; i++) {
    const line = sampleInput[i];
    for (let j = 1; j < line.length - 1; j++) {
      const isVisibleRight = line.slice(j + 1).every((el) => el < line[j]);
      const isVisibleLeft = line.slice(0, j).every((el) => el < line[j]);
      const isVisibleUp = extractColumn(sampleInput, j)
        .slice(0, i)
        .every((el) => el < line[j]);
      const isVisibleDown = extractColumn(sampleInput, j)
        .slice(i + 1)
        .every((el) => el < line[j]);

      if (isVisibleRight || isVisibleLeft || isVisibleUp || isVisibleDown) {
        visibleThree++;
      }
    }
  }
  return visibleThree;
};

const part2 = () => {
  let maxScenicScore = 0;
  for (let i = 1; i < sampleInput.length - 1; i++) {
    const line = sampleInput[i];
    let currentScenicScore = 1;
    for (let j = 1; j < sampleInput[i].length - 1; j++) {
      const right = line.slice(j + 1);
      const left = line.slice(0, j).reverse();
      const up = extractColumn(sampleInput, j).slice(0, i).reverse();
      const down = extractColumn(sampleInput, j).slice(i + 1);

      const list = [right, left, up, down];
      list.forEach((el) => {
        currentScenicScore =
          currentScenicScore * calculScenicScore(el, line[j]);
      });
      if (currentScenicScore > maxScenicScore) {
        maxScenicScore = currentScenicScore;
      }
      currentScenicScore = 1;
    }
  }
  return maxScenicScore;
};

console.log("part1 :", part1());
console.log("part2 :", part2());

//Show a code to Use split without modifying the original array
