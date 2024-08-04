import { useState } from 'react';
import './App.css'
function App() {
  const [counter, setCounter] = useState(0);
  let addValue = () => {
    setCounter(counter+1);
  };
  let subtractValue = () => {
    setCounter(counter-1)
  };
  return (
    <>
    <h3>Make React Look Easy</h3>
    <h4>Counter value : {counter}</h4>
    <button onClick={addValue}>Add value</button>
    <button onClick={subtractValue}>Remove value</button>
    </>
  )
}

export default App
