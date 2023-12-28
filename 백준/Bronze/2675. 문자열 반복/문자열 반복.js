let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testcases = Number(input[0]);
let answers = [];

for(let i= 1; i<= testcases; i++){
    let data = input[i].split(" ")
    let repeat = Number(data[0])
    let string = data[1]
    let charArray =[]
    
    for(let j=0; j< string.length; j++){
        charArray.push(string.charAt(j));
    }
    
    let answer = ""
    for(let k=0; k < string.length; k++){
        for(let r=0; r< repeat; r++){
            answer += charArray[k]
        }        
    }
    
    answers.push(answer)
}

console.log(answers.join('\n'));