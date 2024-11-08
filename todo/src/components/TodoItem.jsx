import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.done ? 'completed' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.done}
          onChange={toggleTodo}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={deleteTodo}></button>
      </div>
    </li>
  );
}

export default TodoItem;
