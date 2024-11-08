import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoFooter from './components/TodoFooter';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Taste JavaScript', done: true },
    { text: 'Code furiously', done: true },
    { text: 'Promote Mavo', done: false },
    { text: 'Give talks', done: false },
    { text: 'Write tutorials', done: true },
    { text: 'Have a life!', done: false },
  ]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  // Yeni görev ekleme
  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { text: newTodo.trim(), done: false }]);
    setNewTodo('');
  };

  // Tüm görevleri tamamlama veya geri alma
  const toggleAll = () => {
    const allDone = todos.every(todo => todo.done);
    setTodos(todos.map(todo => ({ ...todo, done: !allDone })));
  };

  // Görev tamamlandı/tamamlanmadı durumunu değiştirme
  const toggleTodo = (index) => {
    setTodos(todos.map((todo, i) => 
      i === index ? { ...todo, done: !todo.done } : todo
    ));
  };

  // Görevi silme
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Tamamlanmış görevleri temizleme
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  // Filtreleme işlemi
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.done;
    if (filter === 'completed') return todo.done;
    return true;
  });

  return (
    <div className="app">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
      </header>

      {todos.length > 0 && (
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={toggleAll}
            checked={todos.every(todo => todo.done)}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
          
          <ul className="todo-list">
            {filteredTodos.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo}
                toggleTodo={() => toggleTodo(index)}
                deleteTodo={() => deleteTodo(index)}
              />
            ))}
          </ul>
        </section>
      )}

      {todos.length > 0 && (
        <TodoFooter
          count={todos.filter(todo => !todo.done).length}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
          todos={todos} // todos prop olarak iletildi
        />
      )}
    </div>
  );
}

export default App;
