const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin
});

let lineNumber = 0;
let current = undefined;
let out = [];

rl.on("line", line => {
  if (lineNumber !== 0 && line !== current) {
    current = line;
    out.push(current);
    if (out.length === 1000) {
      fs.appendFileSync("output.txt", out.join("\n") + "\n");
      out = [];
    }
  }
  lineNumber++;
}).on("close", () => {
  fs.appendFileSync("output.txt", out.join("\n") + "\n");
});
