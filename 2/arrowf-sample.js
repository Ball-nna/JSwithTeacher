const sum = (firstParam,secondParam)=>{
    return firstParam+secondParam
}
console.log(sum(2,5)) //print : 7

// Arrow function with no arguments
const printHello = ()=>{
    console.log("Hello")
}
printHello()//print : hello

// Arrow function with single arguments

const chechWeight = (weight)=>{
    console.log(`Baggage weight : ${weight} kilograms.`)
}
chechWeight(25)
//cincise arrow function
const multiply = (a,b) => a*b
console.log(multiply(2,30)) //print : 60