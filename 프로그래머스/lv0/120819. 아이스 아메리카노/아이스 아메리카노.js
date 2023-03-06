function solution(money) {
    
    const americano = 5500;   
    
    const maxCups = Math.floor(money / americano)
    const change = money % americano
    
    const answer = [maxCups,change]
    
    return answer;
}