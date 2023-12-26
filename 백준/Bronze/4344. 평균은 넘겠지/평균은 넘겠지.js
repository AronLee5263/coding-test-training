let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0])

for(let i = 1; i<=n; i++){
    let classStudentsScore = input[i].split(" ").map(Number)
    let n = classStudentsScore[0]
    let summary = 0;

    for(let k=1; k <= n; k++){
        summary += classStudentsScore[k]
    }
    let average = summary / n;
    let cnt = 0;
    for(let i=1; i<=n; i++){
    if(classStudentsScore[i] > average) cnt += 1;
    }
    console.log(`${(cnt / n * 100).toFixed(3)}%`)
}
               