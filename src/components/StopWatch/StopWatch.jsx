import { React, useEffect } from "react";

const Stopwatch = ({ running, setTime, time }) => {
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);
  return (
    <div className="stopwatch game-count">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      {/* setRunning(true) Start */}
      {/* setRunning(false) Stop */}
      {/* setTime(0) Reset */}
    </div>
  );
};

export default Stopwatch;
