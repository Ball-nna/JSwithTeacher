function capToFront(str){
  let result = str.replace(/[a-z]/g, '') + str.replace(/[A-Z]/g, '')
   return result
}
console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))
