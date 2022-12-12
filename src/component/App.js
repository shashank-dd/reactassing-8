import React, {  useState } from "react";
import './App.css';

const App = () => {

  let [count, setCount] = useState(0)

  return (
    <div className="ball">
      <h1 className="count"  onDoubleClick={() => { alert("cant edit it") }}>{count}</h1>
      <button className='increment-button' onClick={() => { setCount(count + 1) }}>Increment karo</button>
      
    </div>
  )
}


export default App;