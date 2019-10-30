const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin
});

const getFirstSequence = n => {
  let res = "";
  let i = n;
  while (i > 0) {
    res += "(";
    i--;
  }
  while (i < n) {
    res += ")";
    i++;
  }
  return res;
};

const getRightPosition = s => {
  let depth = 0;
  let i = s.length - 1;
  while (i > 0) {
    if (s[i] === ")") {
      depth++;
    } else {
      depth--;
      if (depth > 0) {
        return i;
      }
    }
    i--;
  }
  return undefined;
};

const countOpenBrackets = line => (line.match(/\(/g) || []).length;

const getNextSequence = line => {
  const n = line.length / 2;
  const position = getRightPosition(line);
  if (position === undefined) {
    return undefined;
  }

  let res = line.slice(0, position) + ")";
  let availableBrackets = n - countOpenBrackets(res);
  while (availableBrackets > 0) {
    res += "(";
    availableBrackets--;
  }
  while (res.length < line.length) {
    res += ")";
  }
  return res;
};

let out = [];

rl.on("line", line => {
  const n = Number(line);
  let sequence = getFirstSequence(n);
  while (sequence) {
    out.push(sequence);
    if (out.length === 100) {
      fs.appendFileSync("output.txt", out.join("\n") + "\n");
      out = [];
    }
    sequence = getNextSequence(sequence);
  }
}).on("close", () => {
  fs.appendFileSync("output.txt", out.join("\n") + "\n");
});
