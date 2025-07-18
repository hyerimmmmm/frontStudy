// 요소 변경
const colors = ["red", "green", "blue"];
colors[1] = "yellow"; // green을 yellow로 변경

// 배열 요소의 추가 및 삭제
const userName: string[] = ["빌", "스티브", "일론"];

userName.push("히로"); // 배열 끝에 '히로' 추가
console.log(userName); // [ '빌', '스티브', '일론', '히로' ]

// 도시 배열 선언 및 초기화
let cities: string[] = ["서울", "부산", "인천", "대구", "대전"];

// removedCity를 string 또는 undefined 타입으로 선언한다.
let removedCity: string | undefined;

// 배열이 비어 있지 않은지 확인한다.
if (cities.length > 0) {
  removedCity = cities.pop(); // 배열 끝에서 요소를 제거하여 removeCity에 대입한다.
}

console.log(removedCity); // "대전"
console.log(cities); // [ '서울', '부산', '인천', '대구' ]