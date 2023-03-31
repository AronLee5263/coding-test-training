function solution(emergency) {
    let newEmergencyArray = []
    let cnt = 0
    
    while(cnt < emergency.length){
        newEmergencyArray.push({value: emergency[cnt], index: cnt})
        cnt = cnt + 1
    }    
    newEmergencyArray.sort((a,b) => {
        return b.value - a.value
    })
    console.log(newEmergencyArray)   
    
    var answer = new Array(emergency.length)
    let cnt2 = 0
    while(cnt2 < newEmergencyArray.length){
        let item = newEmergencyArray[cnt2]
        answer[item.index] = cnt2 + 1
        cnt2 = cnt2 + 1
    }
    return answer
    
    
}