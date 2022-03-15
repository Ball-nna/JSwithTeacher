function totalValume(...val){
    let result = 0 
    for(let i=0;i<val.length;i++){
        result+= val[i][0] * val[i][1] * val[i][2]
    }
    return result
}
console.log(totalValume([4,2,4],[3,3,3],[1,1,2],[2,1,1]))
console.log(totalValume([2,2,2],[2,1,1]))
console.log(totalValume([1,1,1]))
