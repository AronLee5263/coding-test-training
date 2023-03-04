function solution(numbers) {
    var answer = 0;
    
    let cnt = 0;
    let sum = 0;
    
    while(true){
        if(cnt === numbers.length){
            break
        }
        sum = sum + numbers[cnt]
        
        cnt = cnt +1
    }
    answer = sum / numbers.length
    return answer.toFixed(1);
}