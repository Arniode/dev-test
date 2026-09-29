import React from 'react';
import SearchBar from './SearchBar';
import UserList from './UserList';

export default function UserDirectory() {
  return (
    <section style={{ maxWidth: '900px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>User Directory</h2>
      <SearchBar />
      <UserList />
    </section>
  );
}