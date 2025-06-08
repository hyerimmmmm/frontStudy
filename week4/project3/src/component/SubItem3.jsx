import React from "react";
import { AppText } from "../App";
import { useContext } from "react";
import { useRef } from "react";

const SubItem3 = () => {
  const setText = useContext(AppText);
  const inputRef = useRef();
  return (
    <div>
      <input
        ref={inputRef}
        onChange={() => setText(inputRef.current.value)}
        type="text"
      />
    </div>
  );
};

export default SubItem3;
