import React, { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;

  return (
    <div style={styles.container}>
      <h2>Todo Application</h2>

      <form onSubmit={handleAddTodo} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>Add</button>
      </form>

      <div style={styles.filterContainer}>
        {['all', 'active', 'completed'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              ...styles.filterButton,
              fontWeight: filter === type ? 'bold' : 'normal',
              backgroundColor: filter === type ? '#007bff' : '#f0f0f0',
              color: filter === type ? '#fff' : '#333',
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {filteredTodos.length === 0 ? (
        <div style={styles.emptyState}>
          {todos.length === 0
            ? 'Your todo list is empty. Add a task above to get started!'
            : `No ${filter} tasks found.`}
        </div>
      ) : (
        <ul style={styles.list}>
          {filteredTodos.map((todo) => (
            <li key={todo.id} style={styles.listItem}>
              <label style={styles.label}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#888' : '#000',
                  }}
                >
                  {todo.text}
                </span>
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {todos.length > 0 && (
        <footer style={styles.footer}>
          <span>{activeCount} item{activeCount !== 1 ? 's' : ''} remaining</span>
        </footer>
      )}
    </div>
  );
}

const styles = {
  container: { maxWidth: '500px', margin: '1.5rem auto', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', fontFamily: 'sans-serif', backgroundColor: '#fff' },
  form: { display: 'flex', gap: '0.5rem', marginBottom: '1rem' },
  input: { flex: 1, padding: '0.6rem', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' },
  addButton: { padding: '0.6rem 1rem', cursor: 'pointer', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' },
  filterContainer: { display: 'flex', gap: '0.5rem', marginBottom: '1rem' },
  filterButton: { flex: 1, padding: '0.4rem', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  emptyState: { padding: '2rem 0', textAlign: 'center', color: '#666', fontStyle: 'italic' },
  list: { listStyle: 'none', padding: 0, margin: 0 },
  listItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid #eee' },
  label: { display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' },
  deleteButton: { padding: '0.3rem 0.6rem', color: '#dc3545', border: '1px solid #dc3545', background: 'none', borderRadius: '4px', cursor: 'pointer' },
  footer: { marginTop: '1rem', paddingTop: '0.5rem', borderTop: '1px solid #eee', fontSize: '0.85rem', color: '#666' }
};