function isValidIP(val){
    let result = val.split('.')
    if(result.length == 4){
        for(let ip of result){
            let n = parseInt(ip)
            if(n>255 || n <0){ // ip มากกว่า 255 ไม่ได้
                return false
            }else if (n.length >1){
                if(n[0] == '0'){
                    return false
                }
            }
            return true
        }
    }
    return false
}
console.log(isValidIP("1.2.3.4"))
console.log(isValidIP("1.2.3"))
console.log(isValidIP("1.2.3.4.5"))
console.log(isValidIP("123.45.67.89"))
console.log(isValidIP("123.456.78.90"))
console.log(isValidIP("123.056.067.089"))