import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import HomePage from './HomePage';
import listingsReducer from '../features/listingsSlice';
import filtersReducer from '../features/filtersSlice';

// Mock store for testing
const mockStore = configureStore({
  reducer: {
    listings: listingsReducer,
    filters: filtersReducer,
  },
});

describe.skip('HomePage', () => {
  // 1. Golden Path: Render listings successfully
  it('should render listings', () => {
    const mockListings = [
      {
        _id: '1',
        address: { formattedAddress: '123 Main St' },
        userData: { askingPrice: 425000 }, // Ensure askingPrice is a number
        zillowData: { bedrooms: 4, bathrooms: 2, livingAreaValue: 1956 },
      },
    ];

    // Dispatch the mock data to the store
    mockStore.dispatch({
      type: 'listings/fetchListings/fulfilled',
      payload: mockListings,
    });

    render(
      <Provider store={mockStore}>
        <HomePage />
      </Provider>
    );

    // Check if the listing details are rendered
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('$425000')).toBeInTheDocument(); // Ensure price is formatted correctly
    expect(screen.getByText('Beds: 4 | Baths: 2 | sqft: 1956')).toBeInTheDocument();
  });

  // 2. Expected Error: Show error message when fetch fails
  it('should show error message when fetch fails', () => {
    mockStore.dispatch({
      type: 'listings/fetchListings/rejected',
      error: { message: 'Failed to fetch listings' },
    });

    render(
      <Provider store={mockStore}>
        <HomePage />
      </Provider>
    );
    screen.debug();

    expect(screen.getByText('Failed to fetch listings')).toBeInTheDocument();
  });

  // 3. Specific Use Case: Render "No listings found" when list is empty
  it('should render "No listings found" when list is empty', () => {
    mockStore.dispatch({
      type: 'listings/fetchListings/fulfilled',
      payload: [],
    });

    render(
      <Provider store={mockStore}>
        <HomePage />
      </Provider>
    );
    screen.debug();

    expect(screen.getByText('0 listings found')).toBeInTheDocument();
  });
});