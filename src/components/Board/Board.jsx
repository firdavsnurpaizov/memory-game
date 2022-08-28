import React, { useEffect, useState } from "react";
import "./Board.scss";
import { Link } from "react-router-dom";

const Board = () => {
  const [score, setScore] = useState([]);
  useEffect(() => {
    setScore(JSON.parse(localStorage.getItem("score")));
  }, []);

  const [value, setValue] = useState("time");
  const [mode, setMode] = useState("low");
  const [active, setActive] = useState(true);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  function modeHandler(e) {
    setMode(e.target.value);
    e.target.value === "low" ? setActive(true) : setActive(false);
  }

  return (
    <div className="score-container">
      <div className="score">
        <h1>Статистика</h1>
        <div className="btn-wrapper">
          <button
            onClick={modeHandler}
            value="low"
            className={`btn  ${active ? "active-mode" : ""}`}
          >
            Средний
          </button>
          <button
            onClick={modeHandler}
            value="medium"
            className={`btn  ${active ? "" : "active-mode"}`}
          >
            Сложный
          </button>
        </div>
        <div className="div-wrapper">
          <select className="score-select" onChange={handleChange}>
            <option value="time">Time</option>
            <option value="step">Step</option>
          </select>
        </div>
        <div className="score-titles">
          <h2>Игрок</h2>
          <h2>Счёт</h2>
        </div>
        {score
          ?.filter((item) => item.mode === mode)
          ?.map((item, i) => (
            <div className="score-wrapper" key={i}>
              <div className="score-item__wrapper">
                <div>{item.name}</div>
                {value === "time" ? (
                  <div>{item.time} сек.</div>
                ) : (
                  <div>{item.score} счет</div>
                )}
                <div>{item.step} ходов</div>
              </div>
            </div>
          ))}

        <div className="div-wrapper">
          <Link className="link" to="/game">
            <button className="btn">Вернуться в игру</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Board;
