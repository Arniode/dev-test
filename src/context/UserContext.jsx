import React, { createContext, useState, useEffect } from 'react';
import { fetchUsers } from '../services/userService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching users.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <UserContext.Provider
      value={{
        users: filteredUsers,
        searchTerm,
        setSearchTerm,
        loading,
        error,
        retryFetch: loadUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
