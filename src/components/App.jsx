import React, { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);
  const [input, setInput] = useState("");
  function changeText(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }
  function addItem(event) {
    setListItems((prevData) => {
      return [...prevData, input];
    });
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          name="inputText"
          type="text"
          onChange={changeText}
          value={input}
        />
        <button type="submit" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.length === 0 ? <li>A Item </li> : null}
          {listItems.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
