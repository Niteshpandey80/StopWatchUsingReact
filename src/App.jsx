import React, { useState } from 'react'

const App = () => {
   const [time , setTime ] = useState(0);
   const handleStart=()=>{
    
   }
  return (
    <div className='stopwatch'>
      <span className='time'>00:00:00:00</span>
      <div>
        <button  onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      
    </div>
  )
}

export default App
