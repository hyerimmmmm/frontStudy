import React from "react";

const MyMap = () => {
  let array = [1, 2, 3, 4, 5];
  // array에 있던 데이터를 가져와서 2를 곱한 새로운 배열 생성
  // data => array에 있던 데이터를 순차적으로 가져옴
  return (
    <div>
      <h1>Map</h1>
      <div>{array.map((data) => data * 2)}</div>
      <div>
        {array.map((data) => (
          <h1>{data}</h1>
        ))}
      </div>
      <h1>Filter</h1>
      {/* array에 있는 데이터들 중 짝수만 반환해서 새로운 배열 생성하기 */}
      <div>
        {array
          .filter((data) => data % 2 == 0)
          .map((data) => (
            <h1>{data}</h1>
          ))}
      </div>
    </div>
  );
};

export default MyMap;
