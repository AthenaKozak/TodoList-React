import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

function handleChange() {
  const newItem = event.target.value;
  setItem(newItem);
}

function addItem() {
  setItems([
    ...items,
    {
      id: items.length,
      value: item
    }
  ]);
}

  return (
    <div className="container">
    <h1>Todo List</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What needs to be done?"
        value={item}
      />
      <button onClick={addItem}>Add Item</button>
      <ol>
      {items.map((
        item, 
      ) =>(
        <li key={item.id}>{item.value}</li>
      )
      )}
      </ol>
    </div>
  );
}

export default App;
