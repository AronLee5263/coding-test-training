let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0])

let result= ""
if( 1<= n && n<=100){
    for(let i =0; i<n; i++){
        for(let j=0; j<=i; j++){
            result += "*"    
        }
        result +="\n"
    }
}

console.log(result);