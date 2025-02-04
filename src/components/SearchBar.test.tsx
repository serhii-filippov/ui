import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SearchBar from '../components/SearchBar';
import filtersReducer from '../features/filtersSlice';

const mockStore = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});

describe('SearchBar', () => {
  // 1. Golden Path: Update search query on input change
  it('should update search query on input change', () => {
    render(
      <Provider store={mockStore}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search by address...');
    fireEvent.change(input, { target: { value: '123 Main St' } });

    expect(input).toHaveValue('123 Main St');
  });

  // 2. Expected Error: Handle empty search query
  it('should handle empty search query', () => {
    render(
      <Provider store={mockStore}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search by address...');
    fireEvent.change(input, { target: { value: '' } });

    expect(input).toHaveValue('');
  });

  // 3. Specific Use Case: Handle special characters in search query
  it('should handle special characters in search query', () => {
    render(
      <Provider store={mockStore}>
        <SearchBar />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Search by address...');
    fireEvent.change(input, { target: { value: '123 Main St, Apt #4!' } });

    expect(input).toHaveValue('123 Main St, Apt #4!');
  });
});