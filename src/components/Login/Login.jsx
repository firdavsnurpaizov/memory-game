import React, { useState } from "react";
import { isValid } from "../../utils";
import "./Login.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Login = ({ setIsUser }) => {
  const [value, setValue] = useState("");
  const [checkedMode, setCheckedMode] = useState("low");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  function getValue(e) {
    setValue(e.target.value);
  }

  function getChecked(e) {
    setCheckedMode(e.target.value);
  }
  const data = {
    name: value,
    mode: checkedMode,
  };
  function setData() {
    localStorage.setItem("user", JSON.stringify(data));
    setIsUser(true);
  }

  return (
    <div className="login">
      <div className="login-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-wrapper">
        <h1>Введите имя</h1>
        <div>
          <input
            value={user?.name}
            className="login-input"
            type="text"
            onChange={(e) => getValue(e)}
            placeholder="Введите имя"
          />
        </div>

        <h3>Выберите уровень сложности:</h3>
        <div className="login-mode">
          <div>
            <label  className="login-label" htmlFor="low">
              Средний
              <input
                defaultChecked
                onChange={getChecked}
                name="mode"
                value="low"
                id="low"
                type="radio"
              />
              <span className="login-checkmark"></span>
            </label>
          </div>
          <div>
            <label className="login-label" htmlFor="medium">
              Сложный
              <input
                onChange={getChecked}
                name="mode"
                value="medium"
                id="medium"
                type="radio"
              />
              <span className="login-checkmark"></span>
            </label>
          </div>
        </div>

        {!isValid(value) ? (
          <Link className="link" to={"/game"}>
            <button className="btn" onClick={setData}>
              Начать игру
            </button>
          </Link>
        ) : (
          <button className="btn">Начать игру</button>
        )}
      </div>
    </div>
  );
};

export default Login;
