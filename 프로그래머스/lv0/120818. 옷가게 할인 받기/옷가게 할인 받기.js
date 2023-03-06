function solution(price) {
    
let discountRate;
    
    if (price >= 500000) {
        discountRate = 0.2;
    } else if (price >= 300000) {
        discountRate = 0.1;
    } else if (price >= 100000) {
        discountRate = 0.05;
    } else {
        discountRate = 0;
    }
    
    const discountedPrice = price * (1 - discountRate);
    
    return Math.floor(discountedPrice);
}