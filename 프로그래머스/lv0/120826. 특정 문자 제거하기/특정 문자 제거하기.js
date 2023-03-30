function solution(my_string, letter) {
    var newArr = '';  
    let i = 0;
    
    while(i < my_string.length){
        if(my_string[i] !==  letter){
            newArr = newArr + my_string[i]
        }
        
        i = i + 1;
    }
    
    return newArr;
}