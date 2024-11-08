import React from 'react';

function TodoFooter({ count, filter, setFilter, clearCompleted, todos }) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {count} {count === 1 ? 'item' : 'items'} left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')}>All</a>
        </li>
        <li>
          <a href="#/active" className={filter === 'active' ? 'selected' : ''} onClick={() => setFilter('active')}>Active</a>
        </li>
        <li>
          <a href="#/completed" className={filter === 'completed' ? 'selected' : ''} onClick={() => setFilter('completed')}>Completed</a>
        </li>
      </ul>

      {/* Tamamlanmış görevleri temizleme butonu */}
      {todos && todos.some(todo => todo.done) && ( // todos varsa ve en az bir tamamlanmış görev varsa
        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default TodoFooter;
