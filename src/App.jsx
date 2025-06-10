import React, { useRef, useState } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const stopwatchRef = useRef(0);
  const intervalRef = useRef(null);
  const [now, setNow] = useState(null);

  const handleStart = () => {
    setNow(Date.now());
    stopwatchRef.current = new Date().getTime(); 
    intervalRef.current = setInterval(() => {
      setTime(new Date().getTime() - stopwatchRef.current);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setNow(null);
  };

  const timePassed = time / 1000;

  return (
    <div className='stopwatch'>
      <span className='time'>{timePassed.toFixed(3)}</span>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
