import React from 'react';
import TodoApp from './components/TodoApp';
import UserDirectory from './components/UserDirectory';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <div style={{ padding: '2rem', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <TodoApp />
        <hr style={{ margin: '3rem auto', maxWidth: '900px', border: 'none', borderTop: '1px solid #ccc' }} />
        <UserDirectory />
      </div>
    </UserProvider>
  );
}