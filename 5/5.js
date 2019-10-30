const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin
});

const out = {};
let lineNumber = 0;

rl.on("line", line => {
  if (lineNumber !== 0) {
    const arr = line.split(" ");
    for (let i = 1; i < arr.length; i++) {
      if (!out[arr[i]]) {
        out[arr[i]] = 1;
      } else {
        out[arr[i]]++;
      }
    }
  }

  lineNumber++;
}).on("close", () => {
  const keys = Object.keys(out);

  let outPart = [];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    let val = out[key];

    while (val > 0) {
      outPart.push(key);
      val--;
    }

    if (outPart.length > 1000) {
      fs.appendFileSync("output.txt", outPart.join("\n") + "\n");
      outPart = [];
    }
  }
  fs.appendFileSync("output.txt", outPart.join("\n") + "\n");
});
