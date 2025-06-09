  import React, { useRef, useState } from 'react'

  const App = () => {
    const [time , setTime ] = useState(0);
    const stopwatchRef = useRef(0)
    const intervalRef = useRef(null);

    const handleStart=()=>{
        stopwatchRef.current = new Date().getTime();
        intervalRef.current = setInterval(()=>{
          setTime(new Date().getTime()-stopwatchRef.current);
        },10) 
    }
    const handlePause=()=>{

    }
    const handleReset=()=>{

    }
    const formatTime =()=>{
       const ms  = Math.floor((time % 1000)/10 );
       
    }
    return (
      <div className='stopwatch'>
        <span className='time'>{time}</span>
        <div>
          <button  onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        
      </div>
    )
  }

  export default App
