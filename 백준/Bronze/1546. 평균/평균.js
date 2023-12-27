let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0])
let originScores = input[1].split(" ").map(Number)
let maxValue = Math.max(...originScores)

let transformScores = new Array()
let average = 0
for(let i=0; i < n; i++){
    transformScores.push(originScores[i] / maxValue * 100)
    average += transformScores[i]
}

console.log(average / n)