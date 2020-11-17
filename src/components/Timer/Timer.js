import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let sec = null;
    if (isActive) {
      sec = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => clearInterval(sec);
  }, [isActive]);

  return (
    <div>
      <h1>Timer</h1>
      <div className="timer">
        {(seconds - (seconds % 60)) / 60} : {seconds % 60}
      </div>
      <div>
        <button type="button" onClick={toggle}>
          {isActive ? "Stop" : "Start"}
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
