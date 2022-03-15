function removeDups(val) {
    var result = [];
    for(let i = 0; i < val.length; i++) {
      if(result.indexOf(val[i]) === -1) {
        result.push(val[i]);
      }
    }
    return result;
  }
  console.log(removeDups([1,0,1,0]))
  console.log(removeDups(["The","big","cat"]))
  console.log(removeDups(["John","Taylor","John"]))
