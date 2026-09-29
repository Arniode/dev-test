import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserCard from './UserCard';

export default function UserList() {
  const { users, loading, error, retryFetch } = useContext(UserContext);

  if (loading) {
    return <div style={styles.center}>Loading users...</div>;
  }

  if (error) {
    return (
      <div style={styles.center}>
        <p style={{ color: '#dc3545', fontWeight: 'bold' }}>{error}</p>
        <button onClick={retryFetch} style={styles.retryButton}>
          Retry Request
        </button>
      </div>
    );
  }

  if (users.length === 0) {
    return <div style={styles.center}>No matching users found.</div>;
  }

  return (
    <div style={styles.grid}>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

const styles = {
  center: { padding: '2rem', textAlign: 'center', color: '#666' },
  retryButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1rem',
  },
};