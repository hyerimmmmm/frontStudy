// BMI 값 계산
const w: number = 70; // 몸무게(kg)
const h: number = 1.75; // 키(m)
const bmi: number = w / (h * h); // BMI 계산

// BMI 값에 따라 메시지를 표시하는 if~else 문
if (bmi < 18.5) {
    console.log("말랐음");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("보통");
} else if (bmi >= 25 && bmi < 29.9) {
    console.log("비만");
} else {
    console.log("고도비만");
}