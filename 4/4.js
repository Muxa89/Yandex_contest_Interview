const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin
});

const sort = arr => {
  const res = [...arr];
  res.sort();
  return res;
};

let lines = [];
rl.on("line", line => {
  lines.push(line);
}).on("close", () => {
  const line1 = sort(lines[0].split("")).join("");
  const line2 = sort(lines[1].split("")).join("");

  process.stdout.write(line1 === line2 ? "1" : "0");
});
