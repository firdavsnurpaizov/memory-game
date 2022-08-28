import React, { useEffect, useState } from "react";
import { lowDataItems, mediumDataItems } from "../../assets/data";
import Modal from "../../UI/Modal/Modal";
import Card from "../Card/Card";
import Stopwatch from "../StopWatch/StopWatch";
import { Link, useNavigate } from "react-router-dom";
import "./Cards.scss";

const Cards = ({ setIsUser }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [items, setItems] = useState(
    user.mode === "low" ? lowDataItems : mediumDataItems
  );
  const [prev, setPrev] = useState(-1);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [card, setCard] = useState(items.length / 2);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setItems(user.mode === "low" ? lowDataItems : mediumDataItems);
    setIsUser(true);

    setCard(items.length / 2);
    items.map((item) => {
      item.stat = "";
    });
  }, []);

  useEffect(() => {
    if (card === 0) {
      setVisible(true);
      setRunning(false);
      setScore();
    } else {
      setVisible(false);
    }
  }, [items]);

  function again() {
    setTime(0);
    setCount(0);
    setVisible(false);
    setPrev(-1);
    setCard(items.length / 2);
    setItems(user.mode === "low" ? lowDataItems : mediumDataItems);
    items.map((item) => {
      item.stat = "";
    });
  }

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      setTimeout(() => {
        items[current].stat = "end";
        items[prev].stat = "end";
        setItems([...items]);
        setPrev(-1);
      }, 300);
      setCard(card - 1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 300);
    }
  }

  function handleClick(id) {
    setRunning(true);
    if (prev === -1) {
      items[id].stat = "active disabled";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
    setCount(count + 1);
  }

  function setScore() {
    let allScore = JSON.parse(localStorage.getItem("score")) || [];
    let currentUser = allScore.find(
      (item) => item.name === user.name && item.mode === user.mode
    );
    let t = Math.round(time / 1000);
    let s = Math.round(time / 1000) * count;
    let data = {
      name: user.name,
      step: count,
      time: t,
      score: s,
      mode: user.mode,
    };
    if (currentUser) {
      if (currentUser.score > data.score) {
        currentUser.name = data.name;
        currentUser.step = data.step;
        currentUser.time = data.time;
        currentUser.score = data.score;
        currentUser.mode = data.mode;
      }
    } else {
      allScore.push(data);
    }
    allScore.sort((a, b) => a.score - b.score);
    localStorage.setItem("score", JSON.stringify(allScore));
  }

  // const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("user"));
    setUser(userName);
  }, []);

  function logout() {
    localStorage.removeItem("user");
    setIsUser(false);
    console.log(JSON.parse(localStorage.getItem("user")));
    if (!JSON.parse(localStorage.getItem("user"))) {
      navigate("/");
    }
  }

  return (
    <div className="container">
      <div className="game">
        <div className="game-header">
          <h1>Memory game</h1>
          <div className="header-user__wrapper">
            <div>{user.name}</div>
            <svg
              onClick={logout}
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z" />
            </svg>
          </div>
        </div>
        <div className="game-counts">
          <div className="game-count">{count}</div>
          <Stopwatch
            time={time}
            running={running}
            setRunning={setRunning}
            setTime={setTime}
          />
        </div>
        <div className="container-game">
          {items.map((item, i) => {
            return (
              <Card key={i} id={i} handleClick={handleClick} data={item} />
            );
          })}
        </div>
        <Modal className="modal" visible={visible} setVisible={setVisible}>
          <h1 className="modal-title">Игра окончена</h1>
          <p className="modal-item">
            <span>Игрок:</span> {user.name}
          </p>
          <p className="modal-item">
            {" "}
            <span>Кол-во ходов:</span> {count}
          </p>
          <p className="modal-item">
            <span>Общее время:</span> {Math.round(time / 1000)}c.
          </p>
          <p className="modal-item">
            <span>Счет:</span> {Math.round(time / 1000) * count}
          </p>
          <button className="modal-btn" onClick={again}>
            Eщё раз
          </button>
          <Link className="link" to={"/board"}>
            <button className="modal-btn">Статистика</button>
          </Link>
        </Modal>
      </div>
    </div>
  );
};

export default Cards;
