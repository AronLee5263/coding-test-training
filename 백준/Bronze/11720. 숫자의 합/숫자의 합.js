 let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0])
let data = input[1].split("").map(Number)

let summary =0;
for(let i=0; i<n; i++){
    summary += data[i]
}
console.log(summary)