import logo from "./logo.svg";
import "./App.css";
import SubItem1 from "./component/SubItem1";
import { createContext } from "react";
import { useState } from "react";
// 1. 공유 저장소 만들기
export const AppText = createContext();

function App() {
  // 2. 공유할 값 생성
  const [text, setText] = useState("");
  return (
    <div className="App">
      {/* 3. 공유 저장소에 공유값 반영 후 하위 컴포넌트에서 사용할 수 있도록 허용 */}
      {/* 
        <AppText.Provider value={공유할 값}>
          AppText 공유 저장소를 허용할 컴포넌트
        </AppText.Provider>
      */}
      <AppText.Provider value={setText}>
        <h1>Context API 사용하기</h1>
        <h1>{text}</h1>
        <SubItem1></SubItem1>
      </AppText.Provider>
    </div>
  );
}

export default App;
