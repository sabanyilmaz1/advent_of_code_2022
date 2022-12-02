const { readFileSync } = require("fs");

const guides = readFileSync("day02.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

const part1 = () => {
  let score = 0;
  const sample = guides;
  for (let i = 0; i < sample.length; i++) {
    if (sample[i] !== "") {
      if (sample[i][2] === "X") {
        if (sample[i][0] === "C") {
          score += 7;
        }
        if (sample[i][0] === "B") {
          score += 1;
        }
        if (sample[i][0] === "A") {
          score += 4;
        }
      } else if (sample[i][2] === "Y") {
        if (sample[i][0] === "C") {
          score += 2;
        }
        if (sample[i][0] === "B") {
          score += 5;
        }
        if (sample[i][0] === "A") {
          score += 8;
        }
      } else {
        if (sample[i][0] === "C") {
          score += 6;
        }
        if (sample[i][0] === "B") {
          score += 9;
        }
        if (sample[i][0] === "A") {
          score += 3;
        }
      }
    }
  }

  console.log(score);
  return score;
};

const part2 = () => {
  let score = 0;
  const sample = guides;
  for (let i = 0; i < sample.length; i++) {
    if (sample[i] !== "") {
      if (sample[i][2] === "X") {
        if (sample[i][0] === "C") {
          score += 2;
        }
        if (sample[i][0] === "B") {
          score += 1;
        }
        if (sample[i][0] === "A") {
          score += 3;
        }
      } else if (sample[i][2] === "Y") {
        if (sample[i][0] === "C") {
          score += 6;
        }
        if (sample[i][0] === "B") {
          score += 5;
        }
        if (sample[i][0] === "A") {
          score += 4;
        }
      } else {
        if (sample[i][0] === "C") {
          score += 7;
        }
        if (sample[i][0] === "B") {
          score += 9;
        }
        if (sample[i][0] === "A") {
          score += 8;
        }
      }
    }
  }

  console.log(score);
  return score;
};

part2();
