import React from "react";
import { useState } from "react";
import { useRef } from "react";
// useRef: 태그를 지칭할 수 있는 기능

const ExRef = () => {
  const [text, setText] = useState("");
  // 변수에 기능 담아주기
  const inputRef = useRef();

  function chText() {
    // e.target --> input 태그 의미
    // inputRef.current --> input 태그 의미
    // 이벤트 객체와의 차이점
    // - 이벤트 객체는 이벤트가 발생했을 때, 발생시킨 주체 만 알 수 있음
    // - useRef를 사용하면 언제든지 가르키고 싶은 태그를 선택할 수 있음
    setText(inputRef.current.value);
  }

  return (
    <div>
      <h1>신나는 React useRef</h1>
      <input ref={inputRef} onChange={chText} type="text" />
      <p>{text}</p>
    </div>
  );
};

export default ExRef;
