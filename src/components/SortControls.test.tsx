import listingsReducer, { fetchListingsAsync } from '../features/listingsSlice';
import { ListingsState } from '../types';
import { unitsMocks } from '../features/utils';

describe('listingsSlice', () => {
  const initialState: ListingsState = {
    listings: [],
    status: 'idle',
    error: null,
  };

  const mockListings = unitsMocks.mockListings;

  // 1. Golden Path: Fetch listings successfully
  it('should handle fetchListingsAsync.fulfilled', () => {
    const action = fetchListingsAsync.fulfilled(mockListings, 'requestId');
    const state = listingsReducer(initialState, action);

    expect(state.listings).toEqual(mockListings);
    expect(state.status).toBe('succeeded');
    expect(state.error).toBeNull();
  });

  // 2. Expected Error: Fetch listings fails
  it('should handle fetchListingsAsync.rejected', () => {
    const error = new Error('Failed to fetch listings');
    const action = fetchListingsAsync.rejected(error, 'requestId');
    const state = listingsReducer(initialState, action);

    expect(state.status).toBe('failed');
    expect(state.error).toBe('Failed to fetch listings');
  });

  // 3. Specific Use Case: Fetch listings with empty response
  it('should handle fetchListingsAsync with empty response', () => {
    const action = fetchListingsAsync.fulfilled([], 'requestId');
    const state = listingsReducer(initialState, action);

    expect(state.listings).toEqual([]);
    expect(state.status).toBe('succeeded');
  });
});