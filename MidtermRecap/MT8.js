function simplePair(val,n){
    for (let i = 0; i < val.length; i++) {
		for (let j = i+1; j < val.length; j++) {
			if (val[i] * val[j] == n) // ถ้าค่าคูณเท่ากับ n ส่งไปทำ
            return [val[i], val[j]]//ส่งค่าที่คูณกันแล้วได้เท่ากับ n
		}
	}
	return null //ถ้าค่าคูณหาไม่ได้ส่งกลับเป็น null
}
console.log(simplePair([1,2,3],3))
console.log(simplePair([1,2,3],6))
console.log(simplePair([1,2,3],9))//null
