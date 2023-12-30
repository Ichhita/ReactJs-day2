import React, { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [textlist, setTextList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault(); 
    if (!inputValue) return;
    setTextList([...textlist, inputValue]);
    setInputValue("");
  };

  const removeItem = (index) => {
    let newList = [...textlist];
    newList.splice(index, 1);
    setTextList(newList);
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <h2 style={{color:'gray'}}>TO-DO LIST</h2>
        <label>
          <input
            type="text" 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your task"
          />
        </label>
        <button type="submit"style={{ backgroundColor:'maroon', color: 'white', border: 'none', padding: '4px 10px', cursor: 'pointer' }}>+</button>
      </form>
      <ol>
        {textlist.map((item, index) => (
          <li key={index}style={{ display: '-ms-inline-flexbox', justifyContent : 'center', alignItems: 'center', marginBottom: '20px' }}>
            {item}
            <button onClick={() => removeItem(index)}style={{ backgroundColor:'maroon', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}> Delete</button>
          </li>
        ))}
      </ol>
    </>
  );
};
export default ToDoList