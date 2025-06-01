import React, { useState } from "react";
// useState: state 값을 만들 수 있는 리액트훅
// state값 --> 바뀌게 되면 화면이 랜더링됨

const Ex01 = () => {
  // 일반 변수는 값이 바뀌더라도 화면에 적용되지 않음
  let num = 0;

  // 비구조 할당
  // [state값, setState함수] = useState(state 초기값)
  const [number, setNumber] = useState(0);
  const [inputText, setInputText] = useState("값을 입력해주세요");

  function plus() {
    // state값을 바꿀때는 setState 함수를 이용해줘야 함
    setNumber(number + 1);
  }

  function change(e) {
    // e: 이벤트 객체(이벤트에 대한 정보)
    // input 태그에 적은 값으로 text를 바꿔주기
    setInputText(e.target.value);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={plus}>plus</button>

      <h1>State 예제</h1>
      <h1>{inputText}</h1>
      <input type="text" onChange={change} />
    </div>
  );
};

export default Ex01;
