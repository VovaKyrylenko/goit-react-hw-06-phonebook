import React from 'react';
import { Input } from './Finder.styled';

function SearchBar({ value, onChange }) {
  return (
    <Input
      type="text"
      placeholder="Search contacts by name"
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;
