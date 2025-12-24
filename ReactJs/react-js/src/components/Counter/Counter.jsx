import { useState } from "react"
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0);
   const handleDecrease = () =>{
        setCount(prev => prev - 1);
   }
  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h2>Count : {count}</h2>

      <button onClick={()=> setCount(prev => prev + 1)}>Increase</button>
      <button onClick={handleDecrease} disabled = {count === 0}>Decrease</button>
    </div>
  )
}

export default Counter
