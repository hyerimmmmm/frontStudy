const fruits: { [key: string]: string } = {
  Apple: "사과",
  Banana: "바나나",
  Orange: "오렌지",
};

// 변경 전 값을 확인한다.
console.log(fruits["Orange"]); // "오렌지"

// 대입한다.
fruits["Orange"] = "귤";

console.log(fruits["Orange"]); // "귤"   