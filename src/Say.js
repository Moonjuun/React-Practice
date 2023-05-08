import React, { useState } from "react";

const Say = () => {
  const [message, setMaessage] = useState("");
  const onClickEnter = () => setMaessage("안녕");
  const onClickLeave = () => setMaessage("잘가");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨강
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑
      </button>
    </div>
  );
};

export default Say;
