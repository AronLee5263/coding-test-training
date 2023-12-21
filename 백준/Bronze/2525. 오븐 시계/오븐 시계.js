let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

currentTime = input[0].split(" ");
cookingTime = Number(input[1]);

let hour = Number(currentTime[0]);
let minute = Number(currentTime[1]);
// let [a,b] = currentTime.map(Number)

let totalMinute = (hour * 60) +  minute + cookingTime
resultHour = parseInt(totalMinute /60)
resultMinute = totalMinute % 60

resultHour = resultHour % 24

console.log(resultHour + " " + resultMinute );
