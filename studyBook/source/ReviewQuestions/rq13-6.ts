import React, { useState } from "react";

const InputText = () => {
    const [value, setValue] = useState("");

    return (
        <>
            <h1>텍스트 입력</h1>
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
            <button onClick={() => alert(value)}>표시</button>
        </>
    );
};

export default Input;