function solution(num_list) {
    
    let newArr = []
    let cnt = num_list.length -1
    
    while(cnt >= 0){        
        newArr.push(num_list[cnt])
        cnt = cnt -1
    }    
    return newArr;
}