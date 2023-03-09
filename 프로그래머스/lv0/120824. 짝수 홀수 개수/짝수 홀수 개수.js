function solution(num_list) {
  
    let even = 0
    let odd = 0;
    let length = num_list.length
    
    for(let cnt =0; cnt <length; cnt ++){
        
        if(num_list[cnt] % 2 === 0){
            even = even + 1
        }
        else{
            odd = odd + 1
        }
    }    
    return [even, odd]   
}