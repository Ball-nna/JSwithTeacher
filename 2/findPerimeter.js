//1
function findPerimeter(length, width) {
	return (length+width)*2
}
console.log("ข้อที่ : 1")
console.log(findPerimeter(6,7))
console.log(findPerimeter(20,10))
console.log(findPerimeter(2,9))

//2
const equation = (vaLue,convert) =>{
    let num = vaLue.split(" ")
    let result = convert(num[0])
    for (let i =1;i<num.length;i++) {
        if(num[i] == '+') result += convert(num[i+1])
        if(num[i] == '-') result -= convert(num[i+1])
        if(num[i] == '*') result *= convert(num[i+1])
        if(num[i] == '/') result /= convert(num[i+1])
    }
    return result
}
const convert = (text) => {
    Number.isNaN(Number.parseInt(text))//ไม่ใช่เลขแปลงมาเป็นเลข
    let number= 0
    number = parseInt(text)
    if ((text == 'one')) number = 1
    else if ((text == 'two')) number = 2
    else if ((text == 'three')) number = 3
    else if ((text == 'four')) number = 4
    else if ((text == 'five')) number = 5
    else if ((text == 'six')) number = 6
    else if ((text == 'seven')) number = 7
    else if ((text == 'eight')) number = 8
    else if ((text == 'nine')) number = 9
    else if ((text == 'zero')) number = 0
    return number;
}
console.log("ข้อที่ : 2")
/*console.log("1+1 = "+equation('1 + 1',convert))
console.log("7*4-2 = "+equation('7 * 4 - 2',convert))
console.log("1+1+1+1+1 = "+equation('1 + 1 + 1 + 1 + 1',convert))*/
console.log("one+one = "+equation('one + one',convert))
console.log("seven*four-two = "+equation('seven * four - two',convert))
console.log("one+one+one+one+one = "+equation('one + one + one + one + one',convert))