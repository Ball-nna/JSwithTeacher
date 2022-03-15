function sumTwoSmallestNums(val){
    let result=[];
	for(let i=0;i<val.length;i++)
		{
			if(val[i]>0)
				result.push(val[i]) // มากกว่า 0 ถึงทำ ไม่เอาค่าติดลบ
		}
	result.sort((a, b) => (a > b) ? 1 : -1) //เรียงน้อยไปมาก เช็ค -1 ไม่ทำ
	return result[0]+result[1]//ค่าน้อยตัวแรกและตัวที่สอง 
}
console.log(sumTwoSmallestNums([19,5,42,2,77]))
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353453]))
console.log(sumTwoSmallestNums([2,9,6,-1]))
console.log(sumTwoSmallestNums([879,953,694,-847,342,221,-91,723,791,-587]))
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]))


