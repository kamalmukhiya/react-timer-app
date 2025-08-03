import React, { useEffect, useState } from 'react';
import './Timer.css'; // import the CSS file

export const Timer = () => {
  const [second, setSecond] = useState(0);
  const [isRunning, setIsrunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSecond(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handlereset = () => {
    setSecond(0);
    setIsrunning(true);
  };

  return (
    <div className="timer-container">
      <h1 className="timer-heading">⏱ Timer: {second}s</h1>
      <div className="button-group">
        <button className="btn pause" onClick={() => setIsrunning(false)}>Pause</button>
        <button className="btn resume" onClick={() => setIsrunning(true)}>Resume</button>
        <button className="btn reset" onClick={handlereset}>Restart</button>
      </div>
    </div>
  );
};

export default Timer;
