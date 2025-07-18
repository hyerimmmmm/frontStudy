const fruits: { [key: string]: string } = {
  Apple: "사과",
  Banana: "바나나",
  Orange: "오렌지",
};

console.log(fruits); // {"Apple": "사과", "Banana": "바나나", "Orange": "오렌지"}
console.log(fruits["Apple"]); // "사과"
console.log(fruits["Banana"]); // "바나나"
console.log(fruits["Orange"]); // "오렌지"