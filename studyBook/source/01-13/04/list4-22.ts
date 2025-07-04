let age = 25;
let gender = "male";
let flag = true;

// ===== && 연산자 사용 예 =====
// age가 25 이상이고 gender가 "male"인가?
console.log(age >= 25 && gender === "male"); // true

// ===== || 연산자 사용 예 =====
// age가 25 이상 또는 gender가 "male"인가?
gender = "female";
console.log(age >= 25 || gender === "male"); // true

// ===== ! 연산자 사용 예 =====
// flag가 true인 경우
console.log(!flag); // false
// flag의 내용을 반전시킨다.
flag = !flag;
// flag가 flase인 경우
console.log(!flag); // true