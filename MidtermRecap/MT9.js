function digitalClock(sec) {

	let hr = Math.floor(sec/3600);//ค่าที่วินาทีใส่นำมาหาร 3600, 1hr=3600sec
	sec = sec-(hr*3600);//วินาทีตอนแรกมาลบค่า ชม. แล้วเก็บค่าวิ

	let min = Math.floor(sec/60);//นำวินาทีที่เหลือมาคำนวนต่อ  1min = 60sec 
	sec = sec-(min*60);

	if(hr >= 24) 
		hr = hr-24;//ถ้าค่าทีหามามากกว่า หรือ เท่ากับ 24 นำชั่วโมงมาลบ
	if(hr < 10)
		hr = "0"+hr;// ชม < 10 เติม 0 ไปข้างหน้า
	if(min < 10)
		min= "0"+min;// เหมือนข้่างบน
	if(sec < 10)
		sec = "0"+sec;// 
	return hr+":"+min+":"+sec;
}
console.log(digitalClock(5025))
console.log(digitalClock(61201))
console.log(digitalClock(87000))
