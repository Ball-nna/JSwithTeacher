function highestDigit(n){
    result = n.toString().split('')
    return Math.max(...result)
    
}
console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))