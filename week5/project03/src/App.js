import logo from "./logo.svg";
import "./App.css";
import Left01 from "./component/Left01";
import Right01 from "./component/Right01";
import { Provider } from "react-redux";
// Provider: 공유 저장소를 사용할 수 있게끔 허용해 줄 것이다
import store from "./store"; // 공유 저장소를 가지고 옴

function App() {
  return (
    <div className="App">
      {/* 2. 공유 저장소 혀용 */}
      <Provider store={store}>
        <Left01></Left01>
        <Right01></Right01>
      </Provider>
    </div>
  );
}

export default App;
