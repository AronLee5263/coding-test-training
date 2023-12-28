let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let data = input[1]
let summary = 0;

for(let x of data){
    summary += Number(x)
}


console.log(summary)