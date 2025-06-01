import React from "react";
// 컴포넌트 : 화면을 이루는 구성 단위

// 1. 컴포넌트를 만들때는 반드시 대문자로 시작해야 한다
// 2. 컴포넌트는 함수 또는 클래스 형식으로 만들 수 있다

const Menu = ({ name = "준비중입니다", price = "저렴하고 맛있게!" }) => {
  // props --> 상위 컴포넌트에 보낸데이터가 담겨있음(객체 형식)
  return (
    <div>
      <h1>{name}</h1>
      <p>{price}원</p>
    </div>
  );
};

// 3. 다른 곳에서 사용해야 하기 때문에 export를 통해서 내보내야 함
export default Menu;
