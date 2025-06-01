import logo from './logo.svg';
import './App.css';

function App() {
  let name = "길동쌤";
  let style = {
    backgroundColor: "black", color: "red"
  }
  return(
    // React JSX 사용 규칙
    // 1. 컴포넌트에서 여러가지 태그를 출력할 때는 반드시 부모태그 하나로 묶여 있어야 한다
    // 2. 표현식 사용가능 --> JS 문법을 html 내부에서 사용할 때는 {}를 통해서 사용할 수 있음
    // 주의! --> 간단한 변수 출력, 함수 사용만 가능(if, for 사용할 수 없음)
    // 3. class --> className
    // 4. 모든 태그는 여는태그와 닫는태그로 이루어져 있음
    // <input></input>, <img></img>, <br></br>

    <div>
      {name == "승환쌤" ? (
        <div>
          <h1>{name}과 함께하는 즐거운 React 수업</h1>
          <h2>너무 재미있어요</h2>
        </div>
        ) : (
        <h1>{name}과 함께했던 어려운 React 수업</h1>
      )}

      {/* 배경색 : black, 글자색 : red */}
      <h2 className="title2" style={style}>즐거운 React2</h2>
      <input></input>
    </div>
  );
}

export default App;
