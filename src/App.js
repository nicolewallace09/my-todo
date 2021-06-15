import React from 'react'; 
import TodoItem from './components/TodoItem'; 
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
    <Header/> 
    
    <div className="todo-list">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
    </>
  );
}

export default App;
