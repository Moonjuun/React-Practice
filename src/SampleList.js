import React, { useState } from "react";

const SampleList = () => {
  const [names, setNames] = useState([
    { id: 1, text: "강아지" },
    { id: 2, text: "고양이" },
    { id: 3, text: "다람쥐" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(4);

  const onChangeText = (e) => {
    setInputText(e.target.value);
  };

  // 리스트
  const namesList = names.map((name) => {
    return (
      <li key={name.id}>
        {name.id}, {name.text}
        <button onClick={() => onRemove(name.id)}>제거</button>
      </li>
    );
  });

  // 추가
  const onClick = () => {
    const addList = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(addList);
    setInputText("");
  };

  // 제거
  const onRemove = (id) => {
    const removeList = names.filter((name) => name.id !== id);
    setNames(removeList);
  };

  return (
    <>
      <div>
        <input type="text" value={inputText} onChange={onChangeText}></input>
        <button onClick={onClick}> 추가</button>
      </div>
      <ul>{namesList}</ul>
    </>
  );
};

export default SampleList;
