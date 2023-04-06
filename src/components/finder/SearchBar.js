import React from 'react';
import { Input } from './SearchBar.styled';

function SearchBar({ setFilter, filter }) {
  return (
    <Input
      type="text"
      placeholder="Search contacts by name"
      value={filter}
      onChange={event => {
        setFilter(event.target.value);
      }}
    />
  );
}

export default SearchBar;
