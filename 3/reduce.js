const array0fNumbers = [1,2,3,4]
const sum = array0fNumbers.reduce((accumulator,currentValue)=>{
    //console.log(accumulator) เผื่อเช็คว่าทำงานยังไง
    return accumulator+currentValue
})
console.log(sum)