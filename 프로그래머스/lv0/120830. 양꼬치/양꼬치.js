function solution(n, k) {
    var answer = 0;
    
    let yangPrice = n * 12000
    let drinkPrice = k * 2000
    let bonusDrinkCnt = Math.floor(n / 10) * 2000
    
    console.log(yangPrice,drinkPrice,bonusDrinkCnt )
    answer = yangPrice + drinkPrice - bonusDrinkCnt
    
    return answer;
}