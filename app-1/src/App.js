import React, { useState} from 'react';
import List from './components/List';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {

  const [todos, setTodos] = useState ([])

  function addTodo(item) {
    const newTodo = [...todos, item]
    setTodos(newTodo)
  }

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List list={todos} />
    </div>
  );
}

export default App;
