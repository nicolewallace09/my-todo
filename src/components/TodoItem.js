import React from 'react'; 

function TodoItem() {
  return (
    <>
    <div className="todo-item">
      <input type="checkbox" id="todo1" name="todo1"/>
      <label for="todo1">To do </label><br/>
    </div>
  
    </>
  );
}

export default TodoItem;