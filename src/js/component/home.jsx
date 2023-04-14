import React, { useState } from "react";

const Home = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [word, setWord] = useState([]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      if (currentWord.trim() !== "") {
        setWord([currentWord, ...word]);
        setCurrentWord("");
      } else {
        alert("Escribe una palabra");
      }
    }
  };

  const removeItem = (id) => {
    const newWords = word.filter((w, index) => index !== id);
    setWord(newWords);
  };
  console.log(word);

  return (
    <div className="List">
      <h1 className="List-h1">ToDoList</h1>
      <div className="List-list">
        <input
          className="List-input"
          onChange={(e) => setCurrentWord(e.target.value)}
          onKeyDown={handleKey}
          type="text"
          placeholder="What needs to be done?"
          value={currentWord}
        ></input>
        <ul className="List-ul">
          {word.map((w, index) => {
            return (
              <li key={index} id={index} className="List-li">
                {w}
                <svg
                  onClick={() => removeItem(index)}
                  className="List-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="List-num">{word.length} item left</div>
      <div className="List-footer--up"></div>
      <div className="List-footer--down"></div>
    </div>
  );
};

export default Home;
