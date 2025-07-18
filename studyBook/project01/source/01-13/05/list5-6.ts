const x: number = 5;
let msg: string = "";

// if 문 예
if (x > 10) {
  msg = "x가 10보다 큽니다";
} else {
  msg = "x가 10보다 작거나 같습니다";
}
console.log(msg);

// 삼항 연산자 예
msg = x > 10 ? "x가 10보다 큽니다" : "x가 10보다 작거나 같습니다";
console.log(msg);