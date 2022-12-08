const { readFileSync } = require("fs");

const sampleInput = readFileSync("day07.txt", { encoding: "utf-8" })
  .trim()
  .split("\n");

const part1 = () => {
  // console.log(sampleInput);
  const root = { type: "dir", name: "/", subDir: [], size: 0, parent: null };
  let currentDir = root;

  for (let i = 0; i < sampleInput.length; i++) {
    const statement = sampleInput[i];

    if (statement.startsWith("$")) {
      const [, command, dir] = statement.split(" ");

      if (command === "cd") {
        //console.log("Move to dir", currentDir, dir);

        if (dir === "..") {
          const parent = currentDir.parent;
          currentDir = currentDir.parent;
        } else if (dir === "/") {
          currentDir = root;
        } else {
          const nextDir = currentDir.subDir.findIndex(
            (directory) => directory.name === dir
          );
          currentDir = currentDir.subDir[nextDir];
        }
      } else if (command === "ls") {
        console.log("ls : ");
        for (
          let j = i + 1;
          sampleInput[j] &&
          !sampleInput[j].startsWith("$") &&
          j < sampleInput.length;
          j++
        ) {
          const [content, name] = sampleInput[j].split(" ");
          if (content === "dir") {
            currentDir.subDir.push({
              type: "dir",
              name: name,
              subDir: [],
              size: 0,
              parent: currentDir,
            });
          } else {
            currentDir.size += parseInt(content);
            let reverseNode = currentDir;
            while (reverseNode.parent !== null) {
              reverseNode.parent.size += parseInt(content);
              reverseNode = reverseNode.parent;
            }

            currentDir.subDir.push({
              type: "file",
              name: name,
              subDir: [],
              size: parseInt(content),
              parent: currentDir,
            });
          }

          console.log(content, name);
        }
      }
    }
  }
  let sum = 0;
  let allSize = [];
  const binaryAdd = (array, number) => {
    if (array.length === 0) {
      return [number];
    }
    let index = 0;
    while (index < array.length && array[index] < number) {
      index++;
    }
    array.splice(index, 0, number);
    return array;
  };

  const travelTheTree = (currentNode) => {
    if (currentNode.subDir.length > 0) {
      allSize = binaryAdd(allSize, currentNode.size);
    }
    if (currentNode.size < 100000) {
      console.log(currentNode.name, currentNode.size);
      sum += currentNode.size;
    }
    for (let node of currentNode.subDir) {
      travelTheTree(node);
    }
  };

  travelTheTree(root);
  console.log("sum :", sum);
  const currentFreeSpace = 70_000_000 - root.size;
  const spaceWeNeedToDelete = 30_000_000 - currentFreeSpace;

  const index = allSize.findIndex((size) => size >= spaceWeNeedToDelete);
  console.log("ligne 105", allSize[index]);
};

console.log(part1());
