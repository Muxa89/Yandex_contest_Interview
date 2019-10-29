const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [];
rl.on("line", line => {
  lines.push(line);
}).on("close", () => {
  let max = 0;
  let current = 0;

  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '1') {
      current++;
      if (current > max) {
        max = current;
      }
    } else {
      current = 0;
    }
  }

  process.stdout.write(max.toString());
});
