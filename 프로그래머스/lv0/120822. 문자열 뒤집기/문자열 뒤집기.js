function solution(my_string) {
    let newArr = '';
    
    for(let i= my_string.length -1; i>=0; i--){
        newArr = newArr + my_string[i];
    }
    
    
    return newArr;
}