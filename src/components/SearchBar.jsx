import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(UserContext);

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '0.75rem 1rem',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}