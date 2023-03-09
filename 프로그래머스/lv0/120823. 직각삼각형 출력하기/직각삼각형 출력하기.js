const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    
    let line = 1;
    while(line <= n) {
        
        let cnt = 0
        let star =''
        while(cnt < line){
            
            star = star + "*"
            cnt = cnt + 1
        }      
        console.log(star)
        
        line = line + 1
    }
});











