
let fs = require('fs')
let input= fs.readFileSync('/dev/stdin').toString().split('\n')

let data = input[0].split(' ');

a= parseInt(data[0]);
b= parseInt(data[1]);

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(parseInt(a / b))
console.log(a % b)

