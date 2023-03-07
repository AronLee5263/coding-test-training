function solution(my_string) {
   
    let reversedArr = ''
    
    
    for(i =my_string.length -1; i>=0; i--){
        
        reversedArr = reversedArr + my_string[i]
    }
    
    return reversedArr;
    
    
}