
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0)
  function increaseCounter() {
    setCount(++count)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick={increaseCounter}>Click me</button>
    </div>
  )
}

export default App
