import React from 'react';
import { Input } from './Finder.styled';
import { updateFilter } from 'redux/phoneSlice';
import { useDispatch, useSelector } from 'react-redux';

function SearchBar() {
  const filter = useSelector(state => state.phone.filter);
  const dispatch = useDispatch();
  return (
    <Input
      type="text"
      placeholder="Search contacts by name"
      value={filter}
      onChange={event => {
        dispatch(updateFilter(event.target.value));
      }}
    />
  );
}

export default SearchBar;
