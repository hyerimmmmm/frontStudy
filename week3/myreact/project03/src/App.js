import logo from "./logo.svg";
import "./App.css";
// 4. 컴포넌트를 사용하는 곳에서 불러와서(import) 사용하기
import Menu from "./component/Menu";

function App() {
  // props: 상위컴포넌트에서 하위컴포넌트로 데이터 전달시 사용됨
  // (속성)
  return (
    <div className="App">
      <Menu name="아메리카노" price={3500}></Menu>
      <Menu name="카페라떼" price={4000}></Menu>
      <Menu></Menu>
    </div>
  );
}

export default App;
