import React from 'react';

export default function UserCard({ user }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{user.name}</h3>
      <p style={styles.detail}>
        <strong>Email:</strong> {user.email}
      </p>
      <p style={styles.detail}>
        <strong>Company:</strong> {user.company?.name || 'N/A'}
      </p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1.25rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  name: { margin: '0 0 0.5rem 0', color: '#1a1a1a', fontSize: '1.15rem' },
  detail: { margin: '0.25rem 0', color: '#555', fontSize: '0.95rem' },
};