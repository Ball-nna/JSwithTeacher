function circumference(r){
    if(Number.isNaN(Number.parseFloat(r))){
        return 0
    }
    return parseFloat(r) * 2.0 * Math.PI
}
console.log(circumference("4.567abcdefh"))
//expected output : 28.695307297889173

console.log(circumference("abcdefgh"))
//expected output : 0
