function solution(n) {
    
    // let pzCnt = 6;    
    // while(1){
    //     if(pzCnt % n === 0) {
    //         return pzCnt / 6;
    //     }
    //     else if(pzCnt % n !== 0) {
    //         pzCnt = pzCnt + 6;
    //     }
    // }
    
    let pizzaCnt = 1;
    while(true){
        if(pizzaCnt * 6 % n ===0) {
            return pizzaCnt
        }
        pizzaCnt = pizzaCnt + 1
    }
    
}