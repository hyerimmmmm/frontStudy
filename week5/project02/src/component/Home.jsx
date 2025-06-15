import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  function chPage() {
    // nav('원하는 이동 주소값')
    nav("/about");
  }

  return (
    <div>
      <h1>HOME</h1>
      {/* 
        a태그, Link 컴포넌트를 통해서 주소값을 바꿀 수 있음
        a태그 --> index.html을 새로고침 함
        Link --> 새로고침 하지 않으며 안에 있는 컴포넌트만 바꿔줌
      */}
      {/* 
        Link를 사용해서 이동하는 경우
        -> 클릭 시 바로 이동해야 하는 로직 구현
        -> ex: 클릭 시 로그인 페이지로 이동
        useNavigate를 사용해서 이동하는 경우
        -> 페이지 전환 시, 추가 처리 로직이 필요한 경우
        ->ex: 버튼을 클릭했을 때, 로그인이 되어있다면 마이페이지로, 로그인이 되어있지 않다면 로그인 페이지로 이동
      */}
      <a href="/about">About 컴포넌트 띄우기</a>
      <br />
      <Link to="/about">About 컴포넌트 띄우기2</Link>
      <br />
      <button onClick={chPage}>페이지 이동하기</button>

      {/* 1, 2, 3번째 상품으로 상세보기 페이지로 갈 수 있는 Link */}
      <Link to="/product?pronum=1">1번째 상품</Link>
      <Link to="/product?pronum=2">2번째 상품</Link>
      <Link to="/product?pronum=3">3번째 상품</Link>
    </div>
  );
};

export default Home;
