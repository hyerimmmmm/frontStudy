import { createStore } from "redux";
// createStore: 공유 저장소를 만드는 기능

// 1. 공유 저장소 생성
const store = createStore(reducer);

// 3. store에 접근할 수 있는 reducer를 생성
// currentState --> Store에서 꺼내온 state 값
// action --> dispatch로 보내온 값이 담겨있음
function reducer(currentState, action) {
  const newState = { ...currentState };

  // 4. 초기 State값 만들기
  if (currentState === undefined) {
    return {
      text: "초기값",
    };
  }

  if (action.type == "텍스트를 바꿔줘") {
    newState.text = action.text;
  }

  return newState;
}

export default store;
