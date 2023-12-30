import React, { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 2);
  };


  return (
    <div>
      <button onClick={handleIncrement}>Click me to increase</button>
      <button onClick={handleDecrement}>Click me to decrease</button>
      <p> Clicked = {count} times</p>
    </div>
  );
};

export default ClickCounter;
