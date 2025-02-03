import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../features/filtersSlice';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search by address..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;